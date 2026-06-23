interface BrandLogoProps {
  inverse?: boolean
  footer?: boolean
}

export function BrandLogo({ inverse = false, footer = false }: BrandLogoProps) {
  return (
    <span className="flex min-w-0 items-center gap-2 sm:gap-3">
      <span
        className={
          footer
            ? 'flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white p-1'
            : 'flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12'
        }
      >
        <img
          src="/wenze-logo-mark.png"
          alt="Wenze Electric logo"
          width={96}
          height={96}
          decoding="async"
          className="block h-full w-full object-contain"
        />
      </span>
      <span className="flex min-w-0 flex-col justify-center">
        <span
          className={
            footer
              ? 'whitespace-nowrap text-lg font-bold leading-none text-white'
              : 'whitespace-nowrap text-[11px] font-bold leading-none text-primary sm:text-sm'
          }
        >
          WENZE ELECTRIC
        </span>
        <span
          className={
            inverse
              ? 'mt-1 whitespace-nowrap text-[10px] leading-tight text-white/65'
              : 'mt-1 whitespace-nowrap text-[8px] leading-tight text-muted-foreground sm:text-[10px]'
          }
        >
          Shandong Wenze Electric Co., Ltd.
        </span>
      </span>
    </span>
  )
}
