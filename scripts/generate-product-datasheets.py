from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    Image,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIR = ROOT / "public"
OUTPUT_DIR = PUBLIC_DIR / "downloads"

NAVY = colors.HexColor("#0B3255")
BLUE = colors.HexColor("#1E5A87")
ORANGE = colors.HexColor("#E87722")
PALE_BLUE = colors.HexColor("#EAF2F8")
PALE_GRAY = colors.HexColor("#F4F6F8")
MID_GRAY = colors.HexColor("#667085")
LINE = colors.HexColor("#CFD8E3")
TEXT = colors.HexColor("#172B3A")

PAGE_WIDTH, PAGE_HEIGHT = A4
CONTENT_WIDTH = PAGE_WIDTH - 28 * mm

REPORTLAB_FONT_DIR = Path(__import__("reportlab").__file__).resolve().parent / "fonts"
pdfmetrics.registerFont(TTFont("Vera", str(REPORTLAB_FONT_DIR / "Vera.ttf")))
pdfmetrics.registerFont(TTFont("Vera-Bold", str(REPORTLAB_FONT_DIR / "VeraBd.ttf")))
FONT_REGULAR = "Vera"
FONT_BOLD = "Vera-Bold"


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="Brand",
        parent=styles["Normal"],
        fontName=FONT_BOLD,
        fontSize=15,
        leading=17,
        textColor=NAVY,
        spaceAfter=0,
    )
)
styles.add(
    ParagraphStyle(
        name="BrandSub",
        parent=styles["Normal"],
        fontName=FONT_REGULAR,
        fontSize=7.5,
        leading=9,
        textColor=MID_GRAY,
        spaceAfter=0,
    )
)
styles.add(
    ParagraphStyle(
        name="DocTitle",
        parent=styles["Title"],
        fontName=FONT_BOLD,
        fontSize=22,
        leading=25,
        textColor=NAVY,
        alignment=TA_LEFT,
        spaceAfter=3 * mm,
    )
)
styles.add(
    ParagraphStyle(
        name="DocSubtitle",
        parent=styles["Normal"],
        fontName=FONT_BOLD,
        fontSize=9.5,
        leading=12,
        textColor=BLUE,
        spaceAfter=4 * mm,
    )
)
styles.add(
    ParagraphStyle(
        name="Section",
        parent=styles["Heading2"],
        fontName=FONT_BOLD,
        fontSize=12.5,
        leading=15,
        textColor=NAVY,
        spaceBefore=3.5 * mm,
        spaceAfter=2.2 * mm,
    )
)
styles.add(
    ParagraphStyle(
        name="BodySmall",
        parent=styles["BodyText"],
        fontName=FONT_REGULAR,
        fontSize=8.5,
        leading=12,
        textColor=TEXT,
        spaceAfter=2 * mm,
    )
)
styles.add(
    ParagraphStyle(
        name="TableLabel",
        parent=styles["Normal"],
        fontName=FONT_BOLD,
        fontSize=7.5,
        leading=9.5,
        textColor=NAVY,
    )
)
styles.add(
    ParagraphStyle(
        name="TableText",
        parent=styles["Normal"],
        fontName=FONT_REGULAR,
        fontSize=7.5,
        leading=9.5,
        textColor=TEXT,
    )
)
styles.add(
    ParagraphStyle(
        name="TableHead",
        parent=styles["Normal"],
        fontName=FONT_BOLD,
        fontSize=7.5,
        leading=9.5,
        textColor=colors.white,
        alignment=TA_LEFT,
    )
)
styles.add(
    ParagraphStyle(
        name="Note",
        parent=styles["Normal"],
        fontName=FONT_REGULAR,
        fontSize=7.3,
        leading=10,
        textColor=TEXT,
    )
)
styles.add(
    ParagraphStyle(
        name="BulletSmall",
        parent=styles["Normal"],
        fontName=FONT_REGULAR,
        fontSize=8,
        leading=10.5,
        leftIndent=4 * mm,
        firstLineIndent=-2.5 * mm,
        bulletIndent=0,
        textColor=TEXT,
        spaceAfter=1.1 * mm,
    )
)


COMMON_QUOTATION_ITEMS = [
    "Transformer or substation type",
    "Rated capacity and quantity",
    "Primary and secondary voltage",
    "Frequency, phase and vector group",
    "Destination country and utility specification",
    "Indoor/outdoor service, ambient temperature and altitude",
    "Required accessories, protection and metering",
    "Delivery schedule and applicable standard",
]


PRODUCTS = [
    {
        "filename": "wenze-oil-immersed-distribution-transformer-datasheet-en.pdf",
        "document_number": "WZE-DS-OIDT-EN-R1",
        "title": "Oil Immersed Distribution Transformer",
        "subtitle": "English Product Datasheet | Southeast Asia Project Selection",
        "image": "images/products/oil-immersed-distribution-transformer.webp",
        "overview": (
            "Wenze oil-immersed distribution transformers provide medium-to-low-voltage "
            "conversion for utility networks, industrial facilities, commercial developments "
            "and rural electrification projects. The final rating, loss level, accessories and "
            "terminal arrangement are engineered against the approved project specification."
        ),
        "quick_specs": [
            ("Rated capacity", "30-2500 kVA"),
            ("Primary voltage", "6-35 kV"),
            ("Secondary voltage", "0.4 / 0.415 kV or project-specific"),
            ("Frequency", "50 Hz / 60 Hz"),
            ("Phase", "Three-phase"),
            ("Cooling", "ONAN"),
            ("Vector group", "Dyn11 / Yyn0 or project-specific"),
            ("Insulation medium", "Transformer oil"),
            ("Applicable standard", "IEC 60076 or approved project standard"),
            ("Standard altitude", "Up to 1000 m; higher altitude by design review"),
        ],
        "selection_rows": [
            (
                "Common voltage ratios",
                "10/0.4 kV, 11/0.415 kV, 20/0.4 kV, 22/0.415 kV and 33/0.415 kV",
                "Final ratio follows the destination utility specification.",
            ),
            (
                "Frequency",
                "50 Hz / 60 Hz according to the destination-country utility",
                "Frequency and voltage ratio are confirmed against the local utility specification.",
            ),
            (
                "Tap changer",
                "Off-circuit or project-specific arrangement",
                "Range and step are stated in the approved project datasheet.",
            ),
            (
                "Winding conductor",
                "Copper or aluminum",
                "Subject to rating, guaranteed losses and approved design.",
            ),
            (
                "Service environment",
                "Indoor or outdoor tropical service",
                "Declare humidity, coastal pollution, solar load and maximum ambient temperature.",
            ),
            (
                "Testing",
                "IEC 60076 routine tests",
                "Type and special tests are available when included in the agreed scope.",
            ),
        ],
        "features": [
            "Sealed or project-specific oil preservation arrangement",
            "Low-loss magnetic core and project-selected winding conductor",
            "Terminal, protection and monitoring accessories configured to order",
            "Export packing and document package coordinated by destination",
        ],
        "applications": [
            "Utility distribution networks",
            "Industrial facilities and production plants",
            "Commercial and residential developments",
            "Rural electrification",
            "Renewable-energy auxiliary distribution",
        ],
        "guaranteed_data": [
            "No-load loss and load loss",
            "Short-circuit impedance and no-load current",
            "Temperature rise and insulation level",
            "Sound level, overall dimensions and total weight",
            "Accessories, terminal arrangement and general arrangement drawing",
        ],
    },
    {
        "filename": "wenze-dry-type-transformer-datasheet-en.pdf",
        "document_number": "WZE-DS-DTT-EN-R1",
        "title": "Dry Type Transformer",
        "subtitle": "English Product Datasheet | Southeast Asia Project Selection",
        "image": "images/products/dry-type-transformer.webp",
        "overview": (
            "Wenze cast-resin dry-type transformers use solid insulation and air cooling for "
            "indoor substations, commercial buildings, data centers, hospitals and industrial "
            "distribution rooms. Cooling, enclosure, environmental class and monitoring are "
            "selected against the approved installation conditions."
        ),
        "quick_specs": [
            ("Rated capacity", "125-2500 kVA"),
            ("Primary voltage", "6-35 kV"),
            ("Secondary voltage", "0.4 / 0.415 kV or project-specific"),
            ("Frequency", "50 Hz / 60 Hz"),
            ("Phase", "Three-phase"),
            ("Cooling", "AN / AF"),
            ("Vector group", "Dyn11 / Yyn0 or project-specific"),
            ("Insulation medium", "Cast resin"),
            ("Applicable standard", "IEC 60076-11 or approved project standard"),
            ("Standard altitude", "Up to 1000 m; higher altitude by design review"),
        ],
        "selection_rows": [
            (
                "Common voltage ratios",
                "10/0.4 kV, 11/0.415 kV, 20/0.4 kV, 22/0.415 kV and 33/0.415 kV",
                "Final ratio follows the destination utility specification.",
            ),
            (
                "Frequency",
                "50 Hz / 60 Hz according to the destination-country utility",
                "Frequency and voltage ratio are confirmed against the local utility specification.",
            ),
            (
                "Enclosure protection",
                "IP00 open indoor; IP20 or IP23 enclosure options",
                "Final IP level depends on ventilation and site requirements.",
            ),
            (
                "Environmental classification",
                "Climatic, environmental and fire-behaviour classes",
                "Classes are confirmed under IEC 60076-11 for the approved design.",
            ),
            (
                "Temperature monitoring",
                "Winding sensors, controller and optional cooling fans",
                "Alarm and trip contacts are configured to the project interface.",
            ),
            (
                "Testing",
                "IEC 60076-11 routine tests",
                "Type and special tests are available when included in the agreed scope.",
            ),
        ],
        "features": [
            "No insulating oil and reduced fire risk for indoor applications",
            "Cast-resin windings designed for humid and demanding environments",
            "AN natural-air cooling with AF forced-air option",
            "Temperature monitoring and enclosure options configured to order",
        ],
        "applications": [
            "Commercial buildings and shopping centers",
            "Data centers and communication facilities",
            "Hospitals and public buildings",
            "Indoor industrial distribution rooms",
            "Rail, metro and infrastructure projects",
        ],
        "guaranteed_data": [
            "No-load loss and load loss at the stated reference temperature",
            "Short-circuit impedance and no-load current",
            "Insulation system, temperature rise and environmental classes",
            "Sound level, enclosure, overall dimensions and total weight",
            "Monitoring accessories, terminal arrangement and general arrangement drawing",
        ],
    },
    {
        "filename": "wenze-compact-substation-datasheet-en.pdf",
        "document_number": "WZE-DS-CSS-EN-R1",
        "title": "Compact Substation",
        "subtitle": "English Product Datasheet | Southeast Asia Project Selection",
        "image": "images/products/compact-substation-workshop.jpg",
        "overview": (
            "Wenze compact substations integrate medium-voltage switchgear, a distribution "
            "transformer, low-voltage distribution, internal connections and a protective "
            "enclosure. The single-line diagram, transformer technology, protection scheme, "
            "ventilation and enclosure system are engineered for the project."
        ),
        "quick_specs": [
            ("Transformer capacity", "315-2500 kVA"),
            ("High-voltage side", "6 / 10 / 11 / 20 / 22 / 33 / 35 kV"),
            ("Low-voltage side", "0.4 / 0.415 kV or project-specific"),
            ("Frequency", "50 Hz / 60 Hz"),
            ("Transformer type", "Oil-immersed or dry-type"),
            ("HV switchgear", "RMU, LBS-fuse or circuit-breaker configuration"),
            ("LV distribution", "Project-specific incomer, busbar and outgoing feeders"),
            ("Enclosure", "Coated steel, stainless steel or composite"),
            ("Applicable standards", "IEC 62271-202 / IEC 60076 / IEC 61439, as applicable"),
            ("Standard altitude", "Up to 1000 m; higher altitude by design review"),
        ],
        "selection_rows": [
            (
                "MV interface",
                "Radial or ring-network arrangement",
                "Rated voltage, current and short-circuit duty follow the utility interface.",
            ),
            (
                "Transformer section",
                "Oil-immersed ONAN or dry-type AN/AF",
                "Capacity, losses, impedance and vector group are approved separately.",
            ),
            (
                "LV switchboard",
                "Incomer, busbar, metering and outgoing feeders",
                "Rated current and short-circuit rating follow the approved single-line diagram.",
            ),
            (
                "Enclosure protection",
                "Project-selected IP level and corrosion system",
                "Ventilation, transformer type and coastal exposure must be considered together.",
            ),
            (
                "Internal arc",
                "Available where specified",
                "Classification, accessibility type, current and duration require agreement.",
            ),
            (
                "Factory scope",
                "Assembly, internal wiring, earthing and agreed routine tests",
                "Site cable termination, civil foundation and commissioning scope are contractual.",
            ),
        ],
        "features": [
            "Integrated MV, transformer and LV compartments",
            "Compact footprint and reduced on-site assembly",
            "Project-specific metering, protection and automation options",
            "Outdoor enclosure configured for tropical and coastal conditions",
        ],
        "applications": [
            "Industrial parks and production facilities",
            "Commercial and residential developments",
            "Renewable-energy distribution projects",
            "Mining and construction sites",
            "Transport and municipal infrastructure",
        ],
        "guaranteed_data": [
            "Approved single-line diagram and equipment schedule",
            "MV and LV ratings, short-circuit levels and protection scheme",
            "Transformer guaranteed data and accessories",
            "Enclosure IP level, ventilation, dimensions and total weight",
            "General arrangement, foundation plan and cable-entry arrangement",
        ],
    },
]


def paragraph(text, style="TableText"):
    return Paragraph(text, styles[style])


def bullet_list(items):
    return [Paragraph(item, styles["BulletSmall"], bulletText="•") for item in items]


def branded_header():
    logo = Image(str(PUBLIC_DIR / "wenze-logo-mark.png"), width=15 * mm, height=15 * mm)
    company = Table(
        [
            [Paragraph("WENZE ELECTRIC", styles["Brand"])],
            [Paragraph("Shandong Wenze Electric Co., Ltd.", styles["BrandSub"])],
        ],
        colWidths=[76 * mm],
    )
    company.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    contact = Paragraph(
        "www.wenzepower.com<br/>sales@wenzepower.com<br/>+86 159 0534 2405",
        ParagraphStyle(
            "HeaderContact",
            parent=styles["BrandSub"],
            fontSize=7.2,
            leading=9,
            alignment=2,
        ),
    )
    header = Table(
        [[logo, company, contact]],
        colWidths=[19 * mm, 88 * mm, CONTENT_WIDTH - 107 * mm],
    )
    header.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5 * mm),
                ("LINEBELOW", (0, 0), (-1, -1), 1.2, NAVY),
            ]
        )
    )
    return header


def key_value_table(rows):
    data = [[paragraph(label, "TableLabel"), paragraph(value)] for label, value in rows]
    table = Table(data, colWidths=[43 * mm, CONTENT_WIDTH - 43 * mm], repeatRows=0)
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BACKGROUND", (0, 0), (0, -1), PALE_BLUE),
                ("ROWBACKGROUNDS", (1, 0), (1, -1), [colors.white, PALE_GRAY]),
                ("GRID", (0, 0), (-1, -1), 0.45, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 3 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 3 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 2 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2 * mm),
            ]
        )
    )
    return table


def selection_table(rows):
    data = [
        [
            paragraph("Parameter", "TableHead"),
            paragraph("Typical Project Selection", "TableHead"),
            paragraph("Confirmation Basis", "TableHead"),
        ]
    ]
    data.extend(
        [paragraph(label, "TableLabel"), paragraph(selection), paragraph(confirmation)]
        for label, selection, confirmation in rows
    )
    table = Table(data, colWidths=[35 * mm, 62 * mm, CONTENT_WIDTH - 97 * mm], repeatRows=1)
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), NAVY),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, PALE_GRAY]),
                ("GRID", (0, 0), (-1, -1), 0.45, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 2.5 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 2.5 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 2 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2 * mm),
            ]
        )
    )
    return table


def metadata_panel(product):
    data = [
        [paragraph("Document", "TableLabel"), paragraph(product["document_number"])],
        [paragraph("Revision", "TableLabel"), paragraph("R1 | 24 September 2026")],
        [paragraph("Language", "TableLabel"), paragraph("English")],
        [paragraph("Status", "TableLabel"), paragraph("Preliminary product selection data")],
    ]
    table = Table(data, colWidths=[24 * mm, 54 * mm])
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BACKGROUND", (0, 0), (0, -1), PALE_BLUE),
                ("GRID", (0, 0), (-1, -1), 0.45, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 2.3 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 2.3 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 1.7 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.7 * mm),
            ]
        )
    )
    return table


def image_and_metadata(product):
    product_image = Image(
        str(PUBLIC_DIR / product["image"]),
        width=82 * mm,
        height=61.5 * mm,
    )
    product_image.hAlign = "LEFT"
    panel = metadata_panel(product)
    table = Table(
        [[product_image, panel]],
        colWidths=[88 * mm, CONTENT_WIDTH - 88 * mm],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def two_column_lists(left_title, left_items, right_title, right_items):
    left = [Paragraph(left_title, styles["Section"]), *bullet_list(left_items)]
    right = [Paragraph(right_title, styles["Section"]), *bullet_list(right_items)]
    table = Table([[left, right]], colWidths=[CONTENT_WIDTH / 2, CONTENT_WIDTH / 2])
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (0, 0), 0),
                ("RIGHTPADDING", (0, 0), (0, 0), 5 * mm),
                ("LEFTPADDING", (1, 0), (1, 0), 5 * mm),
                ("RIGHTPADDING", (1, 0), (1, 0), 0),
                ("LINEBEFORE", (1, 0), (1, 0), 0.5, LINE),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def notice_box(text):
    table = Table([[Paragraph(f"<b>Important:</b> {text}", styles["Note"])]], colWidths=[CONTENT_WIDTH])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#FFF4E8")),
                ("BOX", (0, 0), (-1, -1), 0.8, ORANGE),
                ("LEFTPADDING", (0, 0), (-1, -1), 3.5 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 3.5 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 2.5 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5 * mm),
            ]
        )
    )
    return table


def footer_callback(product):
    def draw_footer(canvas, doc):
        canvas.saveState()
        canvas.setTitle(f'{product["title"]} | Wenze Electric')
        canvas.setAuthor("Shandong Wenze Electric Co., Ltd.")
        canvas.setSubject("English transformer product datasheet for Southeast Asia projects")
        canvas.setKeywords(
            "Wenze Electric, transformer datasheet, Southeast Asia, IEC transformer, "
            f'{product["title"]}'
        )
        canvas.setStrokeColor(LINE)
        canvas.setLineWidth(0.5)
        canvas.line(14 * mm, 13 * mm, PAGE_WIDTH - 14 * mm, 13 * mm)
        canvas.setFont(FONT_REGULAR, 6.8)
        canvas.setFillColor(MID_GRAY)
        canvas.drawString(14 * mm, 8.5 * mm, product["document_number"])
        canvas.drawCentredString(PAGE_WIDTH / 2, 8.5 * mm, "www.wenzepower.com")
        canvas.drawRightString(
            PAGE_WIDTH - 14 * mm,
            8.5 * mm,
            f"Page {doc.page}",
        )
        canvas.restoreState()

    return draw_footer


def build_datasheet(product):
    output_path = OUTPUT_DIR / product["filename"]
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=A4,
        rightMargin=14 * mm,
        leftMargin=14 * mm,
        topMargin=12 * mm,
        bottomMargin=18 * mm,
        title=f'{product["title"]} | Wenze Electric',
        author="Shandong Wenze Electric Co., Ltd.",
    )

    story = [
        branded_header(),
        Spacer(1, 5 * mm),
        Paragraph(product["title"], styles["DocTitle"]),
        Paragraph(product["subtitle"], styles["DocSubtitle"]),
        image_and_metadata(product),
        Paragraph("Product Overview", styles["Section"]),
        Paragraph(product["overview"], styles["BodySmall"]),
        Paragraph("Typical Selection Range", styles["Section"]),
        key_value_table(product["quick_specs"]),
        Spacer(1, 3.5 * mm),
        notice_box(
            "This document supports preliminary product selection. It does not replace the "
            "project-specific approved datasheet, drawings, technical agreement or routine test report."
        ),
        PageBreak(),
        branded_header(),
        Paragraph("Southeast Asia Project Selection", styles["Section"]),
        Paragraph(
            "Common regional configurations are shown for inquiry preparation. The destination "
            "utility, local regulations and site conditions remain the governing requirements.",
            styles["BodySmall"],
        ),
        selection_table(product["selection_rows"]),
        Spacer(1, 2 * mm),
        two_column_lists(
            "Key Product Features",
            product["features"],
            "Typical Applications",
            product["applications"],
        ),
        Spacer(1, 2 * mm),
        two_column_lists(
            "Guaranteed Data Confirmed After Design Review",
            product["guaranteed_data"],
            "Information Required for Quotation",
            COMMON_QUOTATION_ITEMS,
        ),
        Spacer(1, 4 * mm),
        notice_box(
            "Final guaranteed performance, dimensions, weight, accessories and document scope "
            "are stated only in the approved project documents issued for the applicable order."
        ),
    ]

    callback = footer_callback(product)
    doc.build(story, onFirstPage=callback, onLaterPages=callback)
    return output_path


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for product in PRODUCTS:
        output_path = build_datasheet(product)
        print(output_path.relative_to(ROOT))


if __name__ == "__main__":
    main()
