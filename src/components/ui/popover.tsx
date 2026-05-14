"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"
import { X } from "lucide-react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion, MotionConfig } from "motion/react"

import { cn } from "@/lib/utils"

const TRANSITION = {
  type: "spring" as const,
  bounce: 0.05,
  duration: 0.3,
}

function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, handler])
}

interface PopoverContextType {
  isOpen: boolean
  openPopover: () => void
  closePopover: () => void
  uniqueId: string
  note: string
  setNote: (note: string) => void
}

const PopoverContext = createContext<PopoverContextType | undefined>(undefined)

export function usePopover() {
  const context = useContext(PopoverContext)
  if (!context) {
    throw new Error("usePopover must be used within a PopoverProvider")
  }
  return context
}

function usePopoverLogic(
  controlledOpen?: boolean,
  controlledOnOpenChange?: (open: boolean) => void,
  defaultOpen?: boolean
) {
  const uniqueId = useId()
  const [internalOpen, setInternalOpen] = useState(defaultOpen || false)
  const [note, setNote] = useState("")

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen
  const setIsOpen = controlledOnOpenChange || setInternalOpen

  const openPopover = () => setIsOpen(true)
  const closePopover = () => {
    setIsOpen(false)
    setNote("")
  }

  return { isOpen, openPopover, closePopover, uniqueId, note, setNote }
}

interface PopoverRootProps {
  children: React.ReactNode
  className?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
}

export function PopoverRoot({ 
  children, 
  className,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  defaultOpen
}: PopoverRootProps) {
  const popoverLogic = usePopoverLogic(controlledOpen, controlledOnOpenChange, defaultOpen)

  return (
    <PopoverContext.Provider value={popoverLogic}>
      <MotionConfig transition={TRANSITION}>
        <div
          className={cn(
            "relative flex items-center justify-center isolate",
            className
          )}
        >
          {children}
        </div>
      </MotionConfig>
    </PopoverContext.Provider>
  )
}

export const Popover = PopoverRoot;

interface PopoverTriggerProps {
  children: React.ReactNode
  className?: string
  render?: React.ReactNode
}

export function PopoverTrigger({ children, className, render }: PopoverTriggerProps) {
  const { openPopover } = usePopover()

  if (render && React.isValidElement(render)) {
    const element = render as React.ReactElement<any>
    return React.cloneElement(element, {
      onClick: (e: React.MouseEvent) => {
        if (element.props.onClick) element.props.onClick(e)
        openPopover()
      },
      children: (
        <>
          {element.props.children}
          {children}
        </>
      ),
    })
  }

  return (
    <motion.button
      key="button"
      className={cn(
        "flex items-center justify-center",
        className
      )}
      onClick={openPopover}
    >
      <motion.span className="text-sm">
        {children}
      </motion.span>
    </motion.button>
  )
}

interface PopoverContentProps {
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent) => void
  style?: React.CSSProperties
}

export function PopoverContent({ children, className, onClick, style }: PopoverContentProps) {
  const { isOpen, closePopover, uniqueId } = usePopover()
  const formContainerRef = useRef<HTMLDivElement>(null)

  useClickOutside(formContainerRef, closePopover)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopover()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [closePopover])

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const content = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={formContainerRef}
          className={cn(
            "absolute h-[200px] w-[364px] overflow-hidden border border-[#E8E2DB] bg-[#FAF9F5] outline-none z-50 shadow-lg",
            className
          )}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          style={{
            borderRadius: 12,
            top: "auto",
            left: "auto",
            transform: "none",
            ...style
          }}
          onClick={onClick}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )

  if (!mounted) return null
  return createPortal(content, document.body)
}

interface PopoverFormProps {
  children: React.ReactNode
  onSubmit?: (note: string) => void
  className?: string
}

export function PopoverForm({
  children,
  onSubmit,
  className,
}: PopoverFormProps) {
  const { note, closePopover } = usePopover()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(note)
    closePopover()
  }

  return (
    <form
      className={cn("flex h-full flex-col", className)}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  )
}

interface PopoverLabelProps {
  children: React.ReactNode
  className?: string
}

export function PopoverLabel({ children, className }: PopoverLabelProps) {
  const { uniqueId, note } = usePopover()

  return (
    <motion.span
      layoutId={`popover-label-${uniqueId}`}
      aria-hidden="true"
      style={{
        opacity: note ? 0 : 1,
      }}
      className={cn(
        "absolute left-4 top-3 select-none text-sm text-zinc-500 dark:text-zinc-400",
        className
      )}
    >
      {children}
    </motion.span>
  )
}

interface PopoverTextareaProps {
  className?: string
  placeholder?: string
}

export function PopoverTextarea({ className, placeholder }: PopoverTextareaProps) {
  const { note, setNote } = usePopover()

  return (
    <textarea
      placeholder={placeholder}
      className={cn(
        "h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none",
        className
      )}
      autoFocus
      value={note}
      onChange={(e) => setNote(e.target.value)}
    />
  )
}

interface PopoverFooterProps {
  children: React.ReactNode
  className?: string
}

export function PopoverFooter({ children, className }: PopoverFooterProps) {
  return (
    <div
      key="close"
      className={cn("flex justify-between px-4 py-3", className)}
    >
      {children}
    </div>
  )
}

interface PopoverCloseButtonProps {
  className?: string
}

export function PopoverCloseButton({ className }: PopoverCloseButtonProps) {
  const { closePopover } = usePopover()

  return (
    <button
      type="button"
      className={cn("flex items-center", className)}
      onClick={closePopover}
      aria-label="Close popover"
    >
      <X size={16} className="text-zinc-900 dark:text-zinc-100" />
    </button>
  )
}

interface PopoverSubmitButtonProps {
  className?: string
}

export function PopoverSubmitButton({ className }: PopoverSubmitButtonProps) {
  return (
    <button
      className={cn(
        "relative ml-1 flex h-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 bg-transparent px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:text-zinc-50 dark:hover:bg-zinc-800",
        className
      )}
      type="submit"
      aria-label="Submit note"
    >
      Submit
    </button>
  )
}

export function PopoverHeader({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "px-4 py-2 font-semibold text-zinc-900 dark:text-zinc-100",
        className
      )}
    >
      {children}
    </div>
  )
}

export function PopoverBody({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn("p-4", className)}>{children}</div>
}

// New component: PopoverButton
export function PopoverButton({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-4 py-2 text-left text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
