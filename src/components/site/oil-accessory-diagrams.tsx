import { useId } from "react";

type DiagramKind = "ball" | "drain" | "butterfly" | "breather";

interface OilAccessoryDiagramProps {
  tableId: string;
}

const ink = "#123454";
const accent = "#2279ad";
const guide = "#94afbf";
const fill = "#e8f3f9";

function diagramKind(tableId: string): DiagramKind {
  if (tableId.startsWith("breather-")) return "breather";
  if (tableId.includes("butterfly")) return "butterfly";
  if (tableId.includes("oil-drain")) return "drain";
  return "ball";
}

function label(x: number, y: number, value: string, anchor: "start" | "middle" | "end" = "middle") {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill={ink}
      fontSize="13"
      fontFamily="ui-sans-serif, system-ui, sans-serif"
      fontWeight="700"
      paintOrder="stroke"
      stroke="#ffffff"
      strokeWidth="4"
      strokeLinejoin="round"
    >
      {value}
    </text>
  );
}

function dim(
  markerId: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  symbol: string,
  labelX: number,
  labelY: number,
) {
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={accent}
        strokeWidth="1.5"
        markerStart={`url(#${markerId})`}
        markerEnd={`url(#${markerId})`}
      />
      {label(labelX, labelY, symbol)}
    </g>
  );
}

function ext(x1: number, y1: number, x2: number, y2: number) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={guide} strokeWidth="1" />;
}

function BallValveDrawing({ markerId }: { markerId: string }) {
  return (
    <g>
      {label(178, 45, "FLANGE VIEW")}
      {label(530, 45, "SIDE VIEW")}
      <circle cx="178" cy="164" r="66" fill={fill} stroke={ink} strokeWidth="3" />
      <circle cx="178" cy="164" r="52" fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="6 5" />
      <circle cx="178" cy="164" r="35" fill="#ffffff" stroke={ink} strokeWidth="2" />
      <line x1="90" y1="164" x2="266" y2="164" stroke={guide} strokeDasharray="4 5" />
      <line x1="178" y1="80" x2="178" y2="248" stroke={guide} strokeDasharray="4 5" />
      {label(178, 169, "DN")}
      {ext(112, 98, 112, 76)}
      {ext(244, 98, 244, 76)}
      {dim(markerId, 112, 74, 244, 74, "D1", 178, 68)}
      {ext(126, 210, 126, 260)}
      {ext(230, 210, 230, 260)}
      {dim(markerId, 126, 258, 230, 258, "D2", 178, 278)}
      <rect x="424" y="147" width="126" height="70" rx="22" fill={fill} stroke={ink} strokeWidth="3" />
      <rect x="413" y="139" width="15" height="87" rx="3" fill="#ffffff" stroke={ink} strokeWidth="2" />
      <rect x="547" y="139" width="15" height="87" rx="3" fill="#ffffff" stroke={ink} strokeWidth="2" />
      <line x1="487" y1="147" x2="487" y2="110" stroke={ink} strokeWidth="7" strokeLinecap="round" />
      <line x1="472" y1="109" x2="606" y2="109" stroke={ink} strokeWidth="7" strokeLinecap="round" />
      <circle cx="487" cy="109" r="9" fill="#ffffff" stroke={ink} strokeWidth="2" />
      {ext(413, 226, 413, 267)}
      {ext(562, 226, 562, 267)}
      {dim(markerId, 413, 265, 562, 265, "L", 488, 285)}
      {ext(606, 109, 641, 109)}
      {ext(562, 226, 641, 226)}
      {dim(markerId, 639, 109, 639, 226, "H", 657, 172)}
      {ext(487, 98, 487, 79)}
      {ext(606, 98, 606, 79)}
      {dim(markerId, 487, 77, 606, 77, "B", 547, 69)}
      {label(178, 306, "Bolt-hole count and Ø: see selected DN row")}
    </g>
  );
}

function DrainValveDrawing({ markerId }: { markerId: string }) {
  return (
    <g>
      {label(380, 45, "OIL-DRAIN VALVE OUTLINE")}
      <rect x="261" y="142" width="203" height="92" rx="18" fill={fill} stroke={ink} strokeWidth="3" />
      <rect x="248" y="135" width="17" height="105" rx="3" fill="#ffffff" stroke={ink} strokeWidth="2" />
      <rect x="460" y="135" width="17" height="105" rx="3" fill="#ffffff" stroke={ink} strokeWidth="2" />
      <path d="M318 142v-26h84v26" fill="#ffffff" stroke={ink} strokeWidth="2" />
      <line x1="360" y1="116" x2="360" y2="91" stroke={ink} strokeWidth="6" strokeLinecap="round" />
      <line x1="301" y1="90" x2="418" y2="90" stroke={ink} strokeWidth="6" strokeLinecap="round" />
      <line x1="248" y1="188" x2="477" y2="188" stroke={guide} strokeWidth="1.5" strokeDasharray="6 5" />
      {label(361, 196, "DN")}
      {ext(248, 240, 248, 274)}
      {ext(477, 240, 477, 274)}
      {dim(markerId, 248, 272, 477, 272, "L", 363, 292)}
      {ext(418, 90, 527, 90)}
      {ext(477, 240, 527, 240)}
      {dim(markerId, 525, 90, 525, 240, "H", 543, 168)}
      {label(380, 312, "D1 / D2 and mounting thread: compare the selected DN row")}
    </g>
  );
}

function ButterflyValveDrawing({ markerId, tableId }: { markerId: string; tableId: string }) {
  const isMixedFlange = tableId === "valve-vacuum-eccentric-butterfly";
  const hasLength = !tableId.endsWith("-dual-hole") && !tableId.endsWith("-threaded");
  const interfaceSymbols = tableId.endsWith("-dual-hole")
    ? "D1–D4 / d / d1 / d2 / C / A1 / A2: table references"
    : tableId.endsWith("-threaded")
      ? "D1–D4 / d / C / Md / A1 / A2: table references"
      : "D1–D4 / d / C: see selected DN row; verify flange pattern";
  return (
    <g>
      {isMixedFlange ? (
        <>
          {label(143, 43, "DN40–80 · SQUARE")}
          <rect x="89" y="104" width="108" height="108" rx="6" fill={fill} stroke={ink} strokeWidth="3" />
          <circle cx="143" cy="158" r="37" fill="#ffffff" stroke={ink} strokeWidth="2" />
          <circle cx="106" cy="121" r="4" fill="#ffffff" stroke={accent} strokeWidth="1.5" />
          <circle cx="180" cy="121" r="4" fill="#ffffff" stroke={accent} strokeWidth="1.5" />
          <circle cx="106" cy="195" r="4" fill="#ffffff" stroke={accent} strokeWidth="1.5" />
          <circle cx="180" cy="195" r="4" fill="#ffffff" stroke={accent} strokeWidth="1.5" />
          {label(143, 248, "4-hole flange")}
          {label(325, 43, "DN100–200 · ROUND")}
          <circle cx="325" cy="158" r="55" fill={fill} stroke={ink} strokeWidth="3" />
          <circle cx="325" cy="158" r="35" fill="#ffffff" stroke={ink} strokeWidth="2" />
          {Array.from({ length: 8 }, (_, index) => {
            const angle = (index * Math.PI) / 4;
            return <circle key={index} cx={325 + 45 * Math.cos(angle)} cy={158 + 45 * Math.sin(angle)} r="3.3" fill="#ffffff" stroke={accent} strokeWidth="1.3" />;
          })}
          {label(325, 248, "8-hole flange")}
        </>
      ) : (
        <>
          {label(210, 43, "VALVE DISC · MOUNTING FACE TO CONFIRM")}
          <circle cx="210" cy="165" r="49" fill="#ffffff" stroke={ink} strokeWidth="2" />
          <ellipse cx="210" cy="165" rx="17" ry="45" transform="rotate(-28 210 165)" fill="#d6eafa" stroke={accent} strokeWidth="2" />
          {label(210, 172, "DN")}
          {label(210, 248, tableId.endsWith("-threaded") ? "Threaded-hole interface · Md in table" : tableId.endsWith("-dual-hole") ? "Dual-hole interface · d1 / d2 in table" : "Flange outline / hole pattern to verify")}
        </>
      )}
      {label(550, 43, "SIDE VIEW")}
      <rect x="519" y="141" width="62" height="94" rx="12" fill={fill} stroke={ink} strokeWidth="3" />
      <rect x="510" y="135" width="10" height="107" rx="2" fill="#ffffff" stroke={ink} strokeWidth="2" />
      <rect x="580" y="135" width="10" height="107" rx="2" fill="#ffffff" stroke={ink} strokeWidth="2" />
      <line x1="550" y1="141" x2="550" y2="102" stroke={ink} strokeWidth="7" strokeLinecap="round" />
      <line x1="530" y1="101" x2="611" y2="101" stroke={ink} strokeWidth="7" strokeLinecap="round" />
      {hasLength && (
        <>
          {ext(510, 242, 510, 270)}
          {ext(590, 242, 590, 270)}
          {dim(markerId, 510, 268, 590, 268, "L", 550, 289)}
        </>
      )}
      {ext(519, 132, 519, 122)}
      {ext(581, 132, 581, 122)}
      {dim(markerId, 519, 120, 581, 120, "B", 550, 114)}
      {ext(611, 101, 652, 101)}
      {ext(590, 242, 652, 242)}
      {dim(markerId, 650, 101, 650, 242, "H", 668, 176)}
      {label(380, 312, interfaceSymbols)}
    </g>
  );
}

function BreatherDrawing({ markerId, tableId }: { markerId: string; tableId: string }) {
  if (tableId === "breather-mx1") {
    return (
      <g>
        {label(218, 45, "MX1-1.5 / 3 / 5 · SINGLE CYLINDER")}
        {label(535, 45, "MX1-10 · DUAL CYLINDER")}
        <rect x="184" y="81" width="68" height="19" rx="3" fill={fill} stroke={ink} strokeWidth="2" />
        <path d="M172 101h92l-10 14h-72z" fill="#ffffff" stroke={ink} strokeWidth="2" />
        <rect x="176" y="115" width="84" height="133" rx="18" fill={fill} stroke={ink} strokeWidth="3" />
        <path d="M185 225h66 M189 249v14h58v-14" fill="none" stroke={ink} strokeWidth="2" />
        {ext(176, 248, 176, 281)}
        {ext(260, 248, 260, 281)}
        {dim(markerId, 176, 279, 260, 279, "D", 218, 299)}
        {ext(252, 81, 292, 81)}
        {ext(247, 263, 292, 263)}
        {dim(markerId, 290, 81, 290, 263, "H", 308, 174)}
        <path d="M466 91h138v14H466z" fill="#ffffff" stroke={ink} strokeWidth="2" />
        <rect x="471" y="105" width="58" height="147" rx="16" fill={fill} stroke={ink} strokeWidth="3" />
        <rect x="541" y="105" width="58" height="147" rx="16" fill={fill} stroke={ink} strokeWidth="3" />
        <path d="M479 225h42 M549 225h42 M476 253v12h118v-12" fill="none" stroke={ink} strokeWidth="2" />
        {ext(604, 91, 635, 91)}
        {ext(594, 265, 635, 265)}
        {dim(markerId, 633, 91, 633, 265, "H", 651, 182)}
        {label(535, 298, "D: verify dual-unit envelope on approved drawing")}
      </g>
    );
  }
  return (
    <g>
      {label(380, 45, "TRANSFORMER BREATHER OUTLINE")}
      <path d="M322 110h116l-13 17H335z" fill="#ffffff" stroke={ink} strokeWidth="2" />
      <rect x="351" y="87" width="58" height="22" rx="3" fill={fill} stroke={ink} strokeWidth="2" />
      <rect x="330" y="127" width="100" height="132" rx="21" fill={fill} stroke={ink} strokeWidth="3" />
      <path d="M331 215q49 16 98 0" fill="none" stroke={accent} strokeWidth="2" />
      <path d="M344 237h72" fill="none" stroke={guide} strokeWidth="1.5" strokeDasharray="6 5" />
      <path d="M345 260v15h70v-15" fill="#ffffff" stroke={ink} strokeWidth="2" />
      <line x1="380" y1="87" x2="380" y2="275" stroke={guide} strokeWidth="1" strokeDasharray="5 5" />
      {ext(330, 215, 330, 289)}
      {ext(430, 215, 430, 289)}
      {dim(markerId, 330, 287, 430, 287, "D", 380, 306)}
      {ext(409, 87, 470, 87)}
      {ext(415, 275, 470, 275)}
      {dim(markerId, 468, 87, 468, 275, "H", 485, 186)}
      {label(380, 66, "Select D / H by model in the table below")}
    </g>
  );
}

const titles: Record<DiagramKind, string> = {
  ball: "Flanged ball valve dimension key",
  drain: "Oil-drain valve dimension key",
  butterfly: "Butterfly valve dimension key",
  breather: "Transformer breather dimension key",
};

/** Original outline-only drawings. Numerical values belong to the adjacent model table. */
export function OilAccessoryDiagram({ tableId }: OilAccessoryDiagramProps) {
  const kind = diagramKind(tableId);
  const id = useId().replace(/:/g, "");
  const titleId = `oil-diagram-title-${id}`;
  const descId = `oil-diagram-desc-${id}`;
  const markerId = `oil-diagram-arrow-${id}`;

  return (
    <figure className="overflow-hidden rounded-xl border border-primary/15 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-primary/10 bg-primary/5 px-4 py-2.5">
        <p className="text-sm font-semibold text-primary">{titles[kind]}</p>
        <span className="rounded-full border border-primary/15 bg-white px-2 py-0.5 text-[11px] font-semibold text-primary/70">
          Schematic · not to scale
        </span>
      </div>
      <div
        role="region"
        tabIndex={0}
        aria-label={`${titles[kind]} drawing; scroll horizontally on narrow screens`}
        className="overflow-x-auto overscroll-x-contain focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
      >
        <svg
          viewBox="0 0 760 330"
          role="img"
          aria-labelledby={`${titleId} ${descId}`}
          className="block h-auto min-w-[760px] w-full"
        >
        <title id={titleId}>{titles[kind]}</title>
        <desc id={descId}>
          Original outline schematic with dimension symbols. Model-specific dimensions are listed in the adjacent table. Confirm an approved drawing before manufacture.
        </desc>
        <defs>
          <marker id={markerId} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M1 1 L8 5 L1 9" fill="none" stroke={accent} strokeWidth="1.3" />
          </marker>
        </defs>
        <rect width="760" height="330" fill="#ffffff" />
        <path d="M24 24h20 M24 24v20 M736 24h-20 M736 24v20 M24 306h20 M24 306v-20 M736 306h-20 M736 306v-20" fill="none" stroke="#dae9f1" strokeWidth="1.5" />
        {kind === "ball" && <BallValveDrawing markerId={markerId} />}
        {kind === "drain" && <DrainValveDrawing markerId={markerId} />}
        {kind === "butterfly" && <ButterflyValveDrawing markerId={markerId} tableId={tableId} />}
        {kind === "breather" && <BreatherDrawing markerId={markerId} tableId={tableId} />}
        </svg>
      </div>
      <figcaption className="border-t border-primary/10 px-4 py-2.5 text-xs leading-relaxed text-slate-600">
        Model-specific values are in the adjacent table. Schematic only — confirm the approved outline drawing and mounting interface before manufacture.
        {tableId === "breather-mx1" && " The MX1-10 is shown as a dual-cylinder unit; verify its D envelope on the approved drawing."}
        <span className="sm:hidden"> Scroll horizontally to inspect the complete drawing.</span>
      </figcaption>
    </figure>
  );
}
