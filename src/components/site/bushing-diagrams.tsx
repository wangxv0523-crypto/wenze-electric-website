type DimensionRow = Record<string, string | undefined>;

type DiagramProps = {
  row?: DimensionRow;
  className?: string;
};

type PorcelainDiagramProps = DiagramProps & {
  variant: "BJL" | "BJLW";
};

const ink = "#123b5d";
const dimension = "#2675a8";
const soft = "#e7f1f7";
const orange = "#dd8a28";

function dimensionLabel(symbol: string, row?: DimensionRow) {
  const value = row?.[symbol];
  return value ? `${symbol} = ${value} mm` : symbol;
}

function HorizontalDimension({
  x1,
  x2,
  y,
  extensionTop,
  label,
}: {
  x1: number;
  x2: number;
  y: number;
  extensionTop: number;
  label: string;
}) {
  const labelWidth = Math.max(36, label.length * 7 + 14);
  const center = (x1 + x2) / 2;
  return (
    <g fill="none" stroke={dimension} strokeWidth="1.5" strokeLinecap="round">
      <path d={`M${x1} ${extensionTop}V${y + 8} M${x2} ${extensionTop}V${y + 8} M${x1} ${y}H${x2}`} strokeDasharray="3 3" />
      <path d={`M${x1 + 8} ${y - 4}L${x1} ${y}L${x1 + 8} ${y + 4} M${x2 - 8} ${y - 4}L${x2} ${y}L${x2 - 8} ${y + 4}`} />
      <rect x={center - labelWidth / 2} y={y - 18} width={labelWidth} height="18" rx="4" fill="white" stroke="none" />
      <text x={center} y={y - 5} fill={ink} stroke="none" textAnchor="middle" fontSize="12" fontWeight="700">{label}</text>
    </g>
  );
}

function VerticalDimension({
  x,
  y1,
  y2,
  extensionRight,
  label,
  labelSide = "left",
  labelY,
}: {
  x: number;
  y1: number;
  y2: number;
  extensionRight: number;
  label: string;
  labelSide?: "left" | "right";
  labelY?: number;
}) {
  const labelWidth = Math.max(38, label.length * 6.5 + 14);
  const labelX = labelSide === "left" ? x - labelWidth - 8 : x + 8;
  const textY = labelY ?? (y1 + y2) / 2;
  return (
    <g fill="none" stroke={dimension} strokeWidth="1.5" strokeLinecap="round">
      <path d={`M${x - 7} ${y1}H${extensionRight} M${x - 7} ${y2}H${extensionRight} M${x} ${y1}V${y2}`} strokeDasharray="3 3" />
      <path d={`M${x - 4} ${y1 + 8}L${x} ${y1}L${x + 4} ${y1 + 8} M${x - 4} ${y2 - 8}L${x} ${y2}L${x + 4} ${y2 - 8}`} />
      <rect x={labelX} y={textY - 11} width={labelWidth} height="22" rx="4" fill="white" stroke="none" />
      <text x={labelX + labelWidth / 2} y={textY + 4} fill={ink} stroke="none" textAnchor="middle" fontSize="12" fontWeight="700">{label}</text>
    </g>
  );
}

function DiagramFrame({
  heading,
  description,
  note,
  className,
  children,
}: {
  heading: string;
  description: string;
  note: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-sm ${className ?? ""}`}>
      <div className="border-l-4 border-accent bg-primary px-5 py-4 text-white sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Original schematic</p>
        <h4 className="mt-1 text-lg font-bold leading-snug">{heading}</h4>
      </div>
      <div className="p-3 sm:p-5">
        <div
          className="overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          role="region"
          aria-label={`${heading} drawing`}
          tabIndex={0}
        >
          {children}
        </div>
        <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {description} {note} Schematic only — confirm approved outline drawing before manufacture. Scroll sideways on a narrow screen.
        </figcaption>
      </div>
    </figure>
  );
}

/** Original, not-to-scale outline for the oil-paper cable-through family. */
export function OilPaperBushingDiagram({ row, className }: DiagramProps) {
  return (
    <DiagramFrame
      heading="Oil-paper cable-through bushing outline"
      description="L, L1, L2 and D show the main outline axes. Remaining interface symbols are listed in the adjacent tables."
      note={row?.model ? `Illustrated against reference row ${row.model}.` : "Choose a model row below for numeric callouts."}
      className={className}
    >
      <svg viewBox="0 0 920 326" role="img" aria-labelledby="oil-bushing-title oil-bushing-desc" className="h-auto min-w-[760px] w-full">
        <title id="oil-bushing-title">Schematic side and flange views of an oil-paper transformer bushing</title>
        <desc id="oil-bushing-desc">An original simplified outline. The side view identifies overall length L, external insulation length L1 and oil-end length L2. The flange end view identifies outside diameter D. Dimensions are schematic and must be confirmed against an approved drawing.</desc>
        <rect x="1" y="1" width="918" height="324" rx="14" fill="#f8fbfd" stroke="#d8e5ed" />
        <text x="25" y="27" fill={ink} fontSize="12" fontWeight="700">SIDE VIEW</text>
        <text x="777" y="27" fill={ink} fontSize="12" fontWeight="700">FLANGE END VIEW</text>
        <line x1="67" y1="158" x2="755" y2="158" stroke="#a8bfd0" strokeWidth="1" strokeDasharray="7 5" />

        {/* Conductor and external insulating body. */}
        <path d="M82 146H148V170H82Z" fill="#cfdde6" stroke={ink} strokeWidth="2" />
        <path d="M92 138H116V178H92Z" fill="#dbe6ed" stroke={ink} strokeWidth="2" />
        <path d="M148 132H445V184H148Z" fill={soft} stroke={ink} strokeWidth="2" />
        {[183, 220, 257, 294, 331, 368, 405].map((x) => (
          <path key={x} d={`M${x} 126L${x + 5} 109H${x + 19}L${x + 24} 126V190L${x + 19} 207H${x + 5}L${x} 190Z`} fill="#d9eaf4" stroke={ink} strokeWidth="2" />
        ))}
        <path d="M445 110H480V206H445Z" fill="#b7cedd" stroke={ink} strokeWidth="2.5" />
        <path d="M454 99H471V217H454Z" fill="#e2edf3" stroke={ink} strokeWidth="2" />
        <circle cx="463" cy="112" r="4" fill={orange} />
        <circle cx="463" cy="204" r="4" fill={orange} />

        {/* Oil-side tube and cable exit, deliberately simplified. */}
        <path d="M480 138H706V178H480Z" fill="#e3edf3" stroke={ink} strokeWidth="2" />
        <path d="M600 132H620V184H600Z M681 133H695V183H681Z" fill="#b7cedd" stroke={ink} strokeWidth="2" />
        <path d="M706 144H742V172H706Z" fill="#cfdde6" stroke={ink} strokeWidth="2" />
        <path d="M742 149H754V167H742Z" fill="#e3edf3" stroke={ink} strokeWidth="2" />

        <HorizontalDimension x1={82} x2={754} y={273} extensionTop={179} label={dimensionLabel("L", row)} />
        <HorizontalDimension x1={148} x2={445} y={77} extensionTop={112} label={dimensionLabel("L1", row)} />
        <HorizontalDimension x1={480} x2={754} y={77} extensionTop={132} label={dimensionLabel("L2", row)} />

        {/* The end view is a locating sketch; no hole pattern is certified by it. */}
        <circle cx="829" cy="158" r="53" fill="#e4eef4" stroke={ink} strokeWidth="2.5" />
        <circle cx="829" cy="158" r="34" fill="none" stroke="#7d9bb0" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="829" cy="158" r="16" fill="#f8fbfd" stroke={ink} strokeWidth="2" />
        <circle cx="829" cy="111" r="3.5" fill={orange} />
        <circle cx="876" cy="158" r="3.5" fill={orange} />
        <circle cx="829" cy="205" r="3.5" fill={orange} />
        <circle cx="782" cy="158" r="3.5" fill={orange} />
        <VerticalDimension x={903} y1={105} y2={211} extensionRight={875} label={dimensionLabel("D", row)} labelSide="left" labelY={77} />
        <text x="829" y="248" textAnchor="middle" fill="#55758b" fontSize="11">Mounting details: see table</text>
      </svg>
    </DiagramFrame>
  );
}

/** Original, not-to-scale outline for the BJL and BJLW porcelain families. */
export function PorcelainBushingDiagram({ row, variant, className }: PorcelainDiagramProps) {
  const isBjlW = variant === "BJLW";
  const sheds = isBjlW
    ? [
        { y: 124, halfWidth: 78 },
        { y: 154, halfWidth: 54 },
        { y: 184, halfWidth: 78 },
        { y: 214, halfWidth: 54 },
        { y: 244, halfWidth: 78 },
      ]
    : (row?.shed?.startsWith("4") ? [126, 166, 206, 246] : [138, 195, 252]).map((y) => ({ y, halfWidth: 78 }));
  return (
    <DiagramFrame
      heading={`${variant} porcelain cable-through bushing outline`}
      description="H, h1 and h2 identify axial references; d1 is the mounting-face outside diameter. h3 is listed separately because its exact endpoints require an approved drawing. Other interface symbols remain in the adjacent table."
      note={row?.model ? `Illustrated against reference row ${row.model}.` : "Choose a model row below for numeric callouts."}
      className={className}
    >
      <svg viewBox="0 0 920 386" role="img" aria-labelledby={`${variant}-bushing-title ${variant}-bushing-desc`} className="h-auto min-w-[760px] w-full">
        <title id={`${variant}-bushing-title`}>{`Schematic side and mounting views of a ${variant} porcelain transformer bushing`}</title>
        <desc id={`${variant}-bushing-desc`}>An original simplified outline. The side view identifies total height H, terminal height h1 and body height h2. The h3 dry-arcing distance is shown as a text key without unverified endpoints. A mounting end view identifies diameter d1. It is not to scale and does not establish a production hole pattern.</desc>
        <rect x="1" y="1" width="918" height="384" rx="14" fill="#f8fbfd" stroke="#d8e5ed" />
        <text x="25" y="27" fill={ink} fontSize="12" fontWeight="700">SIDE VIEW</text>
        <text x="744" y="27" fill={ink} fontSize="12" fontWeight="700">MOUNTING END VIEW</text>
        <line x1="454" y1="42" x2="454" y2="352" stroke="#a8bfd0" strokeWidth="1" strokeDasharray="7 5" />

        {/* Terminal stud, shed profile and grounded mounting face. */}
        <path d="M443 54H465V91H443Z" fill="#b7cedd" stroke={ink} strokeWidth="2" />
        <path d="M433 91H475V111H433Z" fill="#d4e5ef" stroke={ink} strokeWidth="2" />
        <path d="M430 108H478V280H430Z" fill={soft} stroke={ink} strokeWidth="2" />
        {sheds.map(({ y, halfWidth }) => (
          <path
            key={y}
            d={`M${454 - halfWidth} ${y}H${454 + halfWidth}L${454 + halfWidth - 13} ${y + 16}H${454 - halfWidth + 13}Z`}
            fill="#d8e9f3"
            stroke={ink}
            strokeWidth="2"
          />
        ))}
        <path d="M390 280H518V302H390Z" fill="#b7cedd" stroke={ink} strokeWidth="2.5" />
        <path d="M437 302H471V343H437Z" fill="#e3edf3" stroke={ink} strokeWidth="2" />
        <circle cx="408" cy="291" r="3.5" fill={orange} />
        <circle cx="500" cy="291" r="3.5" fill={orange} />

        <VerticalDimension x={153} y1={54} y2={343} extensionRight={439} label={dimensionLabel("H", row)} labelSide="left" />
        <VerticalDimension x={258} y1={54} y2={111} extensionRight={431} label={dimensionLabel("h1", row)} labelSide="left" />
        <VerticalDimension x={326} y1={111} y2={302} extensionRight={389} label={dimensionLabel("h2", row)} labelSide="left" />

        <circle cx="791" cy="190" r="63" fill="#e4eef4" stroke={ink} strokeWidth="2.5" />
        <circle cx="791" cy="190" r="37" fill="none" stroke="#7d9bb0" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="791" cy="190" r="20" fill="#f8fbfd" stroke={ink} strokeWidth="2" />
        <circle cx="791" cy="135" r="3.5" fill={orange} />
        <circle cx="846" cy="190" r="3.5" fill={orange} />
        <circle cx="791" cy="245" r="3.5" fill={orange} />
        <circle cx="736" cy="190" r="3.5" fill={orange} />
        <VerticalDimension x={889} y1={127} y2={253} extensionRight={852} label={dimensionLabel("d1", row)} labelSide="left" labelY={96} />
        <text x="791" y="287" textAnchor="middle" fill="#55758b" fontSize="11">Mounting hole details: see table</text>
        <rect x="525" y="308" width="365" height="45" rx="6" fill="#e7f1f7" stroke="#bbd2e0" />
        <text x="538" y="326" fill={ink} fontSize="11" fontWeight="700">h3: dry-arcing distance {row?.h3 ? `= ${row.h3} mm` : "(see selected row)"}</text>
        <text x="538" y="343" fill="#55758b" fontSize="11">Endpoint locations require the approved outline drawing.</text>
        <text x="25" y="365" fill="#55758b" fontSize="11">With a selected row, shed count follows its profile; proportions and hole positions are illustrative.</text>
      </svg>
    </DiagramFrame>
  );
}
