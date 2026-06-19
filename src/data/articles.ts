export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  sections: { h2: string; body: string }[];
};

type ArticleMap = Record<string, Article>;

export const articles: Record<string, ArticleMap> = {
  en: {
    "food-safety-standards-wooden-kitchenware": {
      slug: "food-safety-standards-wooden-kitchenware",
      category: "Compliance",
      title: "Food-Safety Standards for Wooden Kitchenware Exports",
      excerpt:
        "A practical guide for importers on the food-safety certifications, finishes and test reports required to sell wooden kitchenware in Korea, the EU and the US.",
      readTime: "6 min read",
      sections: [
        {
          h2: "Why food safety matters for wooden kitchenware",
          body: "Wood is a natural material — and that means regulators and retailers scrutinize it carefully. Moisture absorption, surface micro-cracks, and residual chemicals from finishes are the three main risk areas. For importers, selecting a manufacturer who proactively manages these risks is the difference between a smooth retail listing and a costly recall.",
        },
        {
          h2: "Key standards by market",
          body: "Korea (KFDA / Ministry of Food and Drug Safety): wooden kitchenware must use food-contact-approved finishes — typically food-grade mineral oil, beeswax blends, or EU/US-approved lacquers. HACCP documentation is expected for B2B supply to major retail chains.\n\nEuropean Union (EU 10/2011 & Framework Regulation 1935/2004): materials in contact with food must not transfer substances in quantities that endanger human health. Suppliers must hold migration test reports from accredited labs.\n\nUnited States (FDA 21 CFR): similar migration testing requirements, with additional focus on finish composition and country-of-origin labeling.",
        },
        {
          h2: "Finishes: what to ask your supplier",
          body: "Food-safe oil finishes (linseed, tung, mineral) penetrate the wood and leave no surface film — ideal for cutting boards. Lacquers and polyurethane coatings create a hard surface layer; these must be certified food-safe (e.g. EU-compliant) and tested for migration. At DEVIAS HOME, all surface finishes are food-grade and backed by third-party lab test reports available on request.",
        },
        {
          h2: "Documentation checklist for importers",
          body: "When sourcing wooden kitchenware, request: (1) Food-contact migration test report from an accredited lab; (2) Material safety data sheet (MSDS) for all finishes; (3) FSC Chain of Custody certificate for wood traceability; (4) Certificate of Origin (C/O); (5) HACCP compliance statement if supplying Korean retailers.",
        },
        {
          h2: "Working with DEVIAS HOME",
          body: "All DEVIAS HOME products ship with complete food-safety documentation. Our facility operates under HACCP guidelines and we maintain FSC and ISO 9001 certifications. We prepare export documentation — including C/O, test reports and packing lists — as standard for every order, ensuring your import customs process runs smoothly.",
        },
      ],
    },

    "oem-vs-odm-wooden-kitchenware": {
      slug: "oem-vs-odm-wooden-kitchenware",
      category: "Sourcing",
      title: "OEM vs ODM: Choosing the Right Model for Your Retail Brand",
      excerpt:
        "OEM and ODM are often confused. This guide explains the difference, when to use each model, and how to evaluate a wooden kitchenware supplier's capabilities.",
      readTime: "5 min read",
      sections: [
        {
          h2: "What is OEM?",
          body: "OEM (Original Equipment Manufacturer) means you supply the design and the manufacturer produces it. You own the IP and the tooling. For wooden kitchenware, this typically means you provide drawings, dimensions, wood species requirements, and finish specifications — and the factory delivers finished goods under your brand.",
        },
        {
          h2: "What is ODM?",
          body: "ODM (Original Design Manufacturer) means the manufacturer develops the product design and you license or purchase it. For importers without an in-house design team, ODM is a faster route to market: choose from the manufacturer's existing designs, customize with your branding, and launch. Some ODM manufacturers — like DEVIAS HOME — offer bespoke design development from a brief, bridging the gap between pure OEM and off-the-shelf ODM.",
        },
        {
          h2: "Which model suits your situation?",
          body: "OEM is the right choice when: you have a design team or existing product IP; you need a specific wood species or joinery method not in the supplier's standard range; you are building a proprietary product range for a house brand.\n\nODM is the right choice when: you want to move fast; you do not have product design resources; you want to test a new category with lower tooling cost and risk.",
        },
        {
          h2: "Key questions to ask a wooden kitchenware supplier",
          body: "1. Do you have an in-house design team or do you use external freelancers? (In-house is faster and more accountable.) 2. Who owns the tooling and CAD files after production? 3. What is your minimum order for OEM vs. ODM products? 4. Can I see test reports for the finishes on your standard ODM range? 5. How do you handle engineering changes between sampling and bulk production?",
        },
        {
          h2: "MOQ and cost considerations",
          body: "OEM orders typically carry higher minimum quantities (1,000+ pcs) due to tooling and setup costs. ODM products, especially those using existing molds, can often ship from 500 pcs per SKU. At DEVIAS HOME, we offer OEM from 1,000 pcs and private-label ODM from 500 pcs, with sample lead times of 7–14 days.",
        },
      ],
    },

    "acacia-wood-oil-finish-durability": {
      slug: "acacia-wood-oil-finish-durability",
      category: "Materials",
      title: "Acacia Wood & Oil Finishes: Durability for Daily Kitchen Use",
      excerpt:
        "Acacia is the dominant species in Vietnamese wooden kitchenware exports. Learn why it performs well, how oil finishes protect it, and what buyers should look for.",
      readTime: "5 min read",
      sections: [
        {
          h2: "Why acacia dominates Vietnamese kitchenware exports",
          body: "Acacia (Acacia mangium and related species) is widely cultivated in Vietnam under FSC-certified plantation programs. It offers a Janka hardness of around 1,700 lbf — harder than maple and significantly harder than rubberwood — making it well-suited to cutting boards and serving surfaces that endure daily knife contact and moisture. Its tight grain and natural oils provide inherent resistance to bacterial absorption compared to softer woods.",
        },
        {
          h2: "Rubberwood: the second-choice species",
          body: "Rubberwood (Hevea brasiliensis) is a plantation byproduct of the rubber industry. It is lighter, less dense, and more affordable than acacia. For serving trays, utensil holders, and decorative kitchenware where knife contact is minimal, rubberwood is an excellent sustainable choice. It should not be the primary species for cutting boards intended for heavy daily use.",
        },
        {
          h2: "Oil finishes: how they work",
          body: "Oil finishes (food-grade mineral oil, tung oil, linseed oil) penetrate into the wood fibers rather than sitting on the surface. This means they: (1) do not crack or peel over time; (2) are easily renewed with re-oiling; (3) remain food-safe with zero film migration risk. The trade-off is that oiled surfaces require periodic re-oiling (every 3–6 months with regular use) and should not be soaked in water or put in a dishwasher.",
        },
        {
          h2: "Lacquer finishes: durability vs. food contact",
          body: "Lacquer and hardwax-oil finishes create a surface layer that is more water-resistant and requires less maintenance than pure oil finishes. However, they must be food-contact certified (EU 10/2011 compliant) and tested for migration. For export to Korea and the EU, always request migration test reports from your supplier when specifying lacquer finishes.",
        },
        {
          h2: "What to specify when ordering",
          body: "In your purchase spec sheet, always define: wood species and origin (e.g. FSC Vietnam acacia); moisture content at time of shipment (typically 8–12% for stability); finish type and certifier; grain orientation for cutting boards (edge grain > face grain for durability); and surface treatment documentation. DEVIAS HOME provides full material datasheets and finish test reports with every order.",
        },
      ],
    },
  },

  ko: {
    "food-safety-standards-wooden-kitchenware": {
      slug: "food-safety-standards-wooden-kitchenware",
      category: "규정 준수",
      title: "원목 주방용품 수출을 위한 식품 안전 기준",
      excerpt:
        "한국, EU, 미국에서 원목 주방용품을 판매하기 위해 필요한 식품 안전 인증, 마감재 및 시험 성적서에 관한 수입업체 실무 가이드.",
      readTime: "6분 읽기",
      sections: [
        {
          h2: "원목 주방용품에 식품 안전이 중요한 이유",
          body: "나무는 천연 소재이기 때문에 규제 기관과 유통업체는 이를 꼼꼼히 검토합니다. 수분 흡수, 표면 미세 균열, 마감재 잔류 화학물질이 세 가지 주요 위험 요소입니다. 수입업체 입장에서는 이러한 위험을 선제적으로 관리하는 제조업체를 선택하는 것이 원활한 리테일 입점과 비용이 많이 드는 리콜 사이의 차이를 만들어 냅니다.",
        },
        {
          h2: "시장별 주요 기준",
          body: "한국(식품의약품안전처): 원목 주방용품은 식품 접촉 승인 마감재를 사용해야 합니다 — 일반적으로 식품용 미네랄 오일, 밀랍 혼합물 또는 EU/미국 승인 래커. 주요 리테일 체인에 B2B 공급 시 HACCP 문서가 요구됩니다.\n\n유럽연합(EU 10/2011 및 기본 규정 1935/2004): 식품 접촉 소재는 인체에 해로운 양의 물질을 이행해서는 안 됩니다. 공급업체는 공인 시험기관의 이행 시험 성적서를 보유해야 합니다.\n\n미국(FDA 21 CFR): 유사한 이행 시험 요건과 함께 마감재 성분 및 원산지 표시에 추가 초점.",
        },
        {
          h2: "마감재: 공급업체에게 확인해야 할 사항",
          body: "식품 안전 오일 마감재(아마인유, 동유, 미네랄 오일)는 목재 섬유에 침투하며 표면 피막을 남기지 않습니다 — 도마에 이상적입니다. 래커와 폴리우레탄 코팅은 단단한 표면층을 형성하므로 식품 안전 인증(EU 준수)을 받아야 하며 이행 시험을 거쳐야 합니다. DEVIAS HOME에서는 모든 표면 마감재가 식품 등급이며 요청 시 제3자 시험 성적서를 제공합니다.",
        },
        {
          h2: "수입업체를 위한 서류 체크리스트",
          body: "원목 주방용품을 소싱할 때 다음을 요청하세요: (1) 공인 시험기관의 식품 접촉 이행 시험 성적서; (2) 모든 마감재에 대한 물질안전보건자료(MSDS); (3) 목재 추적성을 위한 FSC 공급망 관리 인증서; (4) 원산지 증명서(C/O); (5) 한국 리테일 공급 시 HACCP 준수 확인서.",
        },
        {
          h2: "DEVIAS HOME과의 협력",
          body: "DEVIAS HOME의 모든 제품은 완전한 식품 안전 서류와 함께 출하됩니다. 당사 시설은 HACCP 가이드라인 하에 운영되며 FSC 및 ISO 9001 인증을 유지하고 있습니다. C/O, 시험 성적서, 포장 명세서를 포함한 수출 서류는 모든 주문의 기본 사항으로 준비되어 통관 절차가 원활하게 진행됩니다.",
        },
      ],
    },

    "oem-vs-odm-wooden-kitchenware": {
      slug: "oem-vs-odm-wooden-kitchenware",
      category: "소싱",
      title: "OEM vs ODM: 리테일 브랜드에 맞는 모델 선택하기",
      excerpt:
        "OEM과 ODM은 자주 혼동됩니다. 이 가이드에서는 차이점, 각 모델을 사용해야 할 시기, 원목 주방용품 공급업체의 역량을 평가하는 방법을 설명합니다.",
      readTime: "5분 읽기",
      sections: [
        {
          h2: "OEM이란?",
          body: "OEM(주문자 상표 부착 생산)은 귀사가 디자인을 제공하고 제조업체가 생산하는 방식입니다. IP와 금형은 귀사가 소유합니다. 원목 주방용품의 경우, 일반적으로 도면, 치수, 목재 수종 요건, 마감재 사양을 제공하면 공장이 귀사 브랜드로 완제품을 납품합니다.",
        },
        {
          h2: "ODM이란?",
          body: "ODM(제조업체 설계 생산)은 제조업체가 제품 디자인을 개발하고 귀사가 이를 라이선스하거나 구매하는 방식입니다. 자체 디자인팀이 없는 수입업체에게 ODM은 시장 진입이 더 빠른 경로입니다. 제조업체의 기존 디자인에서 선택하고, 브랜딩으로 커스터마이즈하고, 출시합니다. DEVIAS HOME과 같은 일부 ODM 제조업체는 브리프에서 맞춤 디자인 개발을 제공하여 순수 OEM과 기성 ODM의 간격을 줍니다.",
        },
        {
          h2: "어떤 모델이 상황에 맞는가?",
          body: "OEM이 적합한 경우: 자체 디자인팀이나 기존 제품 IP가 있을 때; 공급업체의 표준 범위에 없는 특정 목재 수종이나 접합 방식이 필요할 때; 자체 브랜드를 위한 독점 제품 라인을 구축할 때.\n\nODM이 적합한 경우: 빠르게 시장에 진입하고 싶을 때; 제품 디자인 리소스가 없을 때; 낮은 금형 비용과 리스크로 새로운 카테고리를 테스트하고 싶을 때.",
        },
        {
          h2: "원목 주방용품 공급업체에게 물어볼 핵심 질문",
          body: "1. 자체 디자인팀이 있습니까, 외부 프리랜서를 사용합니까? (자체 팀이 더 빠르고 책임감 있습니다.) 2. 생산 후 금형과 CAD 파일의 소유권은 누구에게 있습니까? 3. OEM 대 ODM 제품의 최소 주문 수량은 얼마입니까? 4. 표준 ODM 제품의 마감재 시험 성적서를 볼 수 있습니까? 5. 샘플링과 양산 사이의 설계 변경은 어떻게 처리합니까?",
        },
        {
          h2: "MOQ 및 비용 고려사항",
          body: "OEM 주문은 금형 및 셋업 비용으로 인해 일반적으로 더 높은 최소 수량(1,000개 이상)이 적용됩니다. ODM 제품, 특히 기존 금형을 사용하는 경우, SKU당 500개부터 출하할 수 있는 경우가 많습니다. DEVIAS HOME은 OEM을 1,000개부터, 프라이빗 라벨 ODM을 500개부터 제공하며, 샘플 납기는 7~14일입니다.",
        },
      ],
    },

    "acacia-wood-oil-finish-durability": {
      slug: "acacia-wood-oil-finish-durability",
      category: "소재",
      title: "아카시아 원목과 오일 마감: 일상 주방 사용을 위한 내구성",
      excerpt:
        "아카시아는 베트남 원목 주방용품 수출에서 지배적인 수종입니다. 성능이 뛰어난 이유, 오일 마감재의 보호 방식, 바이어가 확인해야 할 사항을 알아보세요.",
      readTime: "5분 읽기",
      sections: [
        {
          h2: "베트남 주방용품 수출에서 아카시아가 주도적인 이유",
          body: "아카시아(Acacia mangium 등)는 FSC 인증 조림지 프로그램 하에 베트남에서 광범위하게 재배됩니다. 얀카 경도 약 1,700 lbf를 제공하는데, 이는 단풍나무보다 단단하고 고무나무보다 현저히 단단합니다. 덕분에 일상적인 칼날 접촉과 수분을 견뎌야 하는 도마와 서빙 표면에 적합합니다. 치밀한 나이테와 천연 오일 성분은 부드러운 목재에 비해 세균 흡수에 대한 내재적 저항성을 제공합니다.",
        },
        {
          h2: "고무나무: 두 번째 선택 수종",
          body: "고무나무(Hevea brasiliensis)는 고무 산업의 조림지 부산물입니다. 아카시아보다 가볍고 밀도가 낮으며 더 저렴합니다. 칼날 접촉이 최소화된 서빙 트레이, 도구함, 장식용 주방용품에는 훌륭한 친환경 선택입니다. 일상적으로 많이 사용하는 도마의 주 소재로는 적합하지 않습니다.",
        },
        {
          h2: "오일 마감재의 작동 원리",
          body: "오일 마감재(식품용 미네랄 오일, 동유, 아마인유)는 표면에 머물지 않고 목재 섬유 내부로 침투합니다. 이는 곧: (1) 시간이 지나도 갈라지거나 벗겨지지 않음; (2) 재오일링으로 쉽게 재생 가능; (3) 피막 이행 위험이 없는 식품 안전성 유지를 의미합니다. 단점은 정기적으로 재오일링이 필요하며(정기 사용 시 3~6개월마다), 물에 오래 담그거나 식기세척기 사용을 피해야 합니다.",
        },
        {
          h2: "래커 마감: 내구성 vs. 식품 접촉",
          body: "래커와 하드왁스 오일 마감재는 순수 오일 마감재보다 내수성이 높고 유지 관리가 덜 필요한 표면층을 형성합니다. 그러나 식품 접촉 인증(EU 10/2011 준수)을 받아야 하며 이행 시험을 거쳐야 합니다. 한국 및 EU 수출 시, 래커 마감재를 지정할 때는 항상 공급업체에게 이행 시험 성적서를 요청하세요.",
        },
        {
          h2: "주문 시 사양서에 명시해야 할 사항",
          body: "구매 사양서에 반드시 정의하세요: 목재 수종 및 원산지(예: FSC 베트남 아카시아); 출하 시 함수율(안정성을 위해 보통 8~12%); 마감재 유형 및 인증기관; 도마의 나이테 방향(내구성을 위해 엣지 그레인 > 페이스 그레인); 표면 처리 서류. DEVIAS HOME은 모든 주문에 완전한 소재 데이터시트와 마감재 시험 성적서를 제공합니다.",
        },
      ],
    },
  },

  vi: {
    "food-safety-standards-wooden-kitchenware": {
      slug: "food-safety-standards-wooden-kitchenware",
      category: "Tuân thủ",
      title: "Tiêu chuẩn an toàn thực phẩm khi xuất khẩu đồ bếp gỗ",
      excerpt:
        "Hướng dẫn thực tế cho nhà nhập khẩu về chứng nhận an toàn thực phẩm, hoàn thiện bề mặt và báo cáo kiểm nghiệm cần thiết để bán đồ bếp gỗ tại Hàn Quốc, EU và Mỹ.",
      readTime: "6 phút đọc",
      sections: [
        {
          h2: "Tại sao an toàn thực phẩm quan trọng với đồ bếp gỗ",
          body: "Gỗ là vật liệu tự nhiên — và điều đó có nghĩa là các cơ quan quản lý và nhà bán lẻ kiểm tra rất kỹ. Ba vùng rủi ro chính là: khả năng hấp thụ độ ẩm, vết nứt vi mô trên bề mặt và hóa chất còn lại từ lớp hoàn thiện. Với nhà nhập khẩu, chọn nhà sản xuất chủ động quản lý những rủi ro này là sự khác biệt giữa việc được niêm yết bán lẻ trơn tru và một vụ thu hồi tốn kém.",
        },
        {
          h2: "Tiêu chuẩn chính theo từng thị trường",
          body: "Hàn Quốc (KFDA / Bộ An toàn thực phẩm và Dược phẩm): đồ bếp gỗ phải sử dụng lớp hoàn thiện được phê duyệt tiếp xúc thực phẩm — thường là dầu khoáng cấp thực phẩm, hỗn hợp sáp ong, hoặc sơn mài được EU/Mỹ phê duyệt. Tài liệu HACCP được yêu cầu cho cung ứng B2B cho các chuỗi bán lẻ lớn.\n\nLiên minh Châu Âu (EU 10/2011 & Quy định khung 1935/2004): vật liệu tiếp xúc thực phẩm không được chuyển giao các chất với lượng gây nguy hiểm cho sức khỏe con người. Nhà cung cấp phải có báo cáo thử nghiệm di chuyển từ phòng thí nghiệm được công nhận.\n\nHoa Kỳ (FDA 21 CFR): yêu cầu thử nghiệm di chuyển tương tự, với trọng tâm bổ sung vào thành phần lớp hoàn thiện và ghi nhãn xuất xứ.",
        },
        {
          h2: "Lớp hoàn thiện: những gì cần hỏi nhà cung cấp",
          body: "Lớp hoàn thiện dầu an toàn thực phẩm (dầu lanh, dầu tung, dầu khoáng) thấm vào thớ gỗ và không để lại màng bề mặt — lý tưởng cho thớt. Sơn mài và lớp phủ polyurethane tạo ra lớp bề mặt cứng; chúng phải được chứng nhận an toàn thực phẩm (tuân thủ EU) và được thử nghiệm di chuyển. Tại DEVIAS HOME, tất cả lớp hoàn thiện bề mặt đều là cấp thực phẩm và có báo cáo thử nghiệm từ bên thứ ba theo yêu cầu.",
        },
        {
          h2: "Danh sách tài liệu cho nhà nhập khẩu",
          body: "Khi sourcing đồ bếp gỗ, hãy yêu cầu: (1) Báo cáo thử nghiệm di chuyển tiếp xúc thực phẩm từ phòng thí nghiệm được công nhận; (2) Bảng dữ liệu an toàn vật liệu (MSDS) cho tất cả lớp hoàn thiện; (3) Chứng chỉ FSC Chain of Custody để truy xuất gỗ; (4) Giấy chứng nhận xuất xứ (C/O); (5) Tuyên bố tuân thủ HACCP nếu cung ứng cho nhà bán lẻ Hàn Quốc.",
        },
        {
          h2: "Làm việc với DEVIAS HOME",
          body: "Tất cả sản phẩm DEVIAS HOME được giao kèm tài liệu an toàn thực phẩm đầy đủ. Cơ sở của chúng tôi hoạt động theo hướng dẫn HACCP và duy trì chứng nhận FSC và ISO 9001. Chúng tôi chuẩn bị chứng từ xuất khẩu — bao gồm C/O, báo cáo kiểm nghiệm và danh sách đóng gói — như tiêu chuẩn cho mọi đơn hàng, đảm bảo quy trình thông quan nhập khẩu diễn ra suôn sẻ.",
        },
      ],
    },

    "oem-vs-odm-wooden-kitchenware": {
      slug: "oem-vs-odm-wooden-kitchenware",
      category: "Sourcing",
      title: "OEM hay ODM: chọn mô hình phù hợp cho thương hiệu bán lẻ",
      excerpt:
        "OEM và ODM thường bị nhầm lẫn. Hướng dẫn này giải thích sự khác biệt, khi nào nên dùng mỗi mô hình, và cách đánh giá năng lực nhà cung cấp đồ bếp gỗ.",
      readTime: "5 phút đọc",
      sections: [
        {
          h2: "OEM là gì?",
          body: "OEM (Original Equipment Manufacturer) có nghĩa là bạn cung cấp thiết kế và nhà sản xuất thực hiện sản xuất. Bạn sở hữu IP và khuôn mẫu. Với đồ bếp gỗ, điều này thường có nghĩa là bạn cung cấp bản vẽ, kích thước, yêu cầu về loài gỗ và thông số lớp hoàn thiện — và nhà máy giao thành phẩm dưới thương hiệu của bạn.",
        },
        {
          h2: "ODM là gì?",
          body: "ODM (Original Design Manufacturer) có nghĩa là nhà sản xuất phát triển thiết kế sản phẩm và bạn cấp phép hoặc mua lại. Với nhà nhập khẩu không có đội thiết kế nội bộ, ODM là con đường nhanh hơn ra thị trường: chọn từ các thiết kế sẵn có của nhà sản xuất, tùy chỉnh với thương hiệu của bạn, và tung ra thị trường. Một số nhà sản xuất ODM — như DEVIAS HOME — cung cấp phát triển thiết kế theo yêu cầu từ brief, thu hẹp khoảng cách giữa OEM thuần túy và ODM có sẵn.",
        },
        {
          h2: "Mô hình nào phù hợp với tình huống của bạn?",
          body: "OEM phù hợp khi: bạn có đội thiết kế hoặc IP sản phẩm hiện có; bạn cần loài gỗ hoặc phương pháp ghép nối cụ thể không có trong dòng tiêu chuẩn của nhà cung cấp; bạn đang xây dựng dòng sản phẩm độc quyền cho thương hiệu nhà.\n\nODM phù hợp khi: bạn muốn nhanh chóng ra thị trường; bạn không có nguồn lực thiết kế sản phẩm; bạn muốn thử nghiệm danh mục mới với chi phí và rủi ro khuôn mẫu thấp hơn.",
        },
        {
          h2: "Câu hỏi then chốt cần hỏi nhà cung cấp đồ bếp gỗ",
          body: "1. Bạn có đội thiết kế nội bộ hay dùng freelancer bên ngoài? (Nội bộ nhanh hơn và có trách nhiệm hơn.) 2. Ai sở hữu khuôn mẫu và file CAD sau khi sản xuất? 3. Số lượng đặt hàng tối thiểu cho OEM và ODM là bao nhiêu? 4. Tôi có thể xem báo cáo kiểm nghiệm lớp hoàn thiện trên dòng ODM tiêu chuẩn không? 5. Bạn xử lý các thay đổi kỹ thuật giữa giai đoạn làm mẫu và sản xuất đại trà như thế nào?",
        },
        {
          h2: "Cân nhắc MOQ và chi phí",
          body: "Đơn hàng OEM thường có số lượng tối thiểu cao hơn (1.000+ cái) do chi phí khuôn mẫu và thiết lập. Sản phẩm ODM, đặc biệt là những sản phẩm dùng khuôn mẫu hiện có, thường có thể giao từ 500 cái mỗi SKU. Tại DEVIAS HOME, chúng tôi cung cấp OEM từ 1.000 cái và ODM nhãn riêng từ 500 cái, với thời gian làm mẫu 7–14 ngày.",
        },
      ],
    },

    "acacia-wood-oil-finish-durability": {
      slug: "acacia-wood-oil-finish-durability",
      category: "Vật liệu",
      title: "Gỗ keo & lớp lau dầu: độ bền cho sử dụng bếp hàng ngày",
      excerpt:
        "Gỗ keo là loài chiếm ưu thế trong xuất khẩu đồ bếp gỗ của Việt Nam. Tìm hiểu tại sao nó hoạt động tốt, cách lớp hoàn thiện dầu bảo vệ và những gì buyer cần lưu ý.",
      readTime: "5 phút đọc",
      sections: [
        {
          h2: "Tại sao gỗ keo thống trị xuất khẩu đồ bếp gỗ Việt Nam",
          body: "Gỗ keo (Acacia mangium và các loài liên quan) được trồng rộng rãi ở Việt Nam trong các chương trình rừng trồng được chứng nhận FSC. Nó có độ cứng Janka khoảng 1.700 lbf — cứng hơn cây thích và cứng hơn đáng kể so với gỗ cao su — khiến nó phù hợp cho thớt và bề mặt phục vụ phải chịu tiếp xúc dao hàng ngày và độ ẩm. Vân gỗ dày và dầu tự nhiên của nó cung cấp khả năng chống hấp thụ vi khuẩn vốn có so với các loại gỗ mềm hơn.",
        },
        {
          h2: "Gỗ cao su: loài lựa chọn thứ hai",
          body: "Gỗ cao su (Hevea brasiliensis) là sản phẩm phụ của ngành công nghiệp cao su. Nó nhẹ hơn, ít đặc hơn và rẻ hơn gỗ keo. Với khay phục vụ, giá đựng dụng cụ, và đồ bếp trang trí nơi tiếp xúc dao tối thiểu, gỗ cao su là lựa chọn bền vững tuyệt vời. Không nên dùng làm loài chính cho thớt dùng hàng ngày nhiều.",
        },
        {
          h2: "Lớp hoàn thiện dầu: cách hoạt động",
          body: "Lớp hoàn thiện dầu (dầu khoáng cấp thực phẩm, dầu tung, dầu lanh) thấm sâu vào thớ gỗ thay vì nằm trên bề mặt. Điều này có nghĩa là: (1) không nứt hoặc bong tróc theo thời gian; (2) dễ dàng phục hồi bằng cách thoa dầu lại; (3) duy trì an toàn thực phẩm với không có nguy cơ di chuyển màng. Mặt trái là bề mặt được dầu cần thoa dầu lại định kỳ (mỗi 3–6 tháng khi sử dụng thường xuyên) và không nên ngâm nước hoặc cho vào máy rửa chén.",
        },
        {
          h2: "Lớp hoàn thiện sơn mài: độ bền vs. tiếp xúc thực phẩm",
          body: "Lớp hoàn thiện sơn mài và dầu sáp cứng tạo ra lớp bề mặt chống nước hơn và ít bảo dưỡng hơn so với lớp hoàn thiện dầu thuần túy. Tuy nhiên, chúng phải được chứng nhận tiếp xúc thực phẩm (tuân thủ EU 10/2011) và được thử nghiệm di chuyển. Khi xuất khẩu sang Hàn Quốc và EU, luôn yêu cầu báo cáo thử nghiệm di chuyển từ nhà cung cấp khi chỉ định lớp hoàn thiện sơn mài.",
        },
        {
          h2: "Những gì cần chỉ định khi đặt hàng",
          body: "Trong bảng thông số mua hàng, luôn xác định: loài gỗ và xuất xứ (ví dụ: gỗ keo FSC Việt Nam); hàm lượng độ ẩm tại thời điểm giao hàng (thường 8–12% để ổn định); loại lớp hoàn thiện và đơn vị chứng nhận; hướng thớ gỗ cho thớt (thớ cạnh > thớ mặt để bền hơn); và tài liệu xử lý bề mặt. DEVIAS HOME cung cấp bảng dữ liệu vật liệu đầy đủ và báo cáo kiểm nghiệm lớp hoàn thiện kèm theo mỗi đơn hàng.",
        },
      ],
    },
  },
};
