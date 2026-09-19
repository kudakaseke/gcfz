const topicNames = {
  organisation: "GCFZ Organisation",
  governance: "Governance and Funding",
  careers: "Careers at GCFZ",
  "understanding-cancer": "Understanding Cancer",
  "causes-prevention": "Causes and Prevention",
  screening: "Gynaecological Cancer Screening",
  "diagnosis-staging": "Diagnosis and Staging",
  treatment: "Cancer Treatment",
  coping: "Coping with Cancer",
  "managing-care": "Managing Cancer Care",
  "bladder-cancer": "Bladder Cancer",
  "breast-cancer": "Breast Cancer",
  "colorectal-cancer": "Colorectal Cancer",
  "kidney-cancer": "Kidney Cancer",
  "lung-cancer": "Lung Cancer",
  lymphoma: "Lymphoma",
  "pancreatic-cancer": "Pancreatic Cancer",
  "prostate-cancer": "Prostate Cancer",
  "skin-cancer": "Skin Cancer",
  "cervical-cancer": "Cervical Cancer",
  "ovarian-cancer": "Ovarian Cancer",
  "uterine-cancer": "Uterine Cancer",
  "vaginal-cancer": "Vaginal Cancer",
  "vulvar-cancer": "Vulvar Cancer",
  "cancer-blog": "Cancer Awareness Blog"
};

const key = new URLSearchParams(window.location.search).get("topic") || "understanding-cancer";
const title = topicNames[key] || "Cancer Information";
document.title = `${title} | GCFZ`;
document.getElementById("topic-title").textContent = title;
document.getElementById("crumb").textContent = title;

document.querySelectorAll(".nav-links a").forEach((link) => link.classList.remove("active"));
const aboutGcfzTopics = ["organisation", "governance", "careers"];
const newsTopics = ["cancer-blog"];
const cancerTypeTopics = [
  "bladder-cancer", "breast-cancer", "cervical-cancer", "colorectal-cancer",
  "kidney-cancer", "lung-cancer", "lymphoma", "ovarian-cancer", "pancreatic-cancer",
  "prostate-cancer", "skin-cancer", "uterine-cancer", "vaginal-cancer", "vulvar-cancer"
];
const activeNavHref = aboutGcfzTopics.includes(key)
  ? "about-gcfz.html"
  : newsTopics.includes(key)
    ? "news-events.html"
  : cancerTypeTopics.includes(key)
    ? "cancer-types.html"
    : "about-cancer.html";
document.querySelector(`.nav-links a[href="${activeNavHref}"]`)?.classList.add("active");

if (key === "organisation") {
  document.body.classList.add("organisation-page");
  document.querySelector("main").innerHTML = `
    <div class="breadcrumbs"><a href="index.html">Home</a><span>&rsaquo;</span><a href="about-gcfz.html">About GCFZ</a><span>&rsaquo;</span><span>GCFZ Organisation</span></div>
    <section class="organisation-layout">
      <aside class="organisation-nav" aria-label="GCFZ organisation sections">
        <h2>GCFZ Organisation</h2>
        <a href="#overview">Overview</a>
        <a href="#centers">Centers</a>
        <a href="#divisions">Divisions</a>
        <a href="#offices">Offices</a>
      </aside>
      <article class="organisation-content">
        <h1>GCFZ Organisation</h1>
        <section class="organisation-overview" id="overview">
          <p>GCFZ has 13 divisions, offices, and centers that work together to build and strengthen a coordinated response to cancer in Zimbabwe. Their work ranges from cancer research, prevention, diagnosis, and treatment support; to training the next generation of cancer advocates and health professionals; to building partnerships with hospitals, universities, researchers, and communities; and to informing and educating the public about cancer.</p>
        </section>

        <section class="organisation-section" id="divisions">
          <h2>Divisions</h2>
          <div class="organisation-grid division-grid">
            <article class="organisation-card division-card division-prevention"><div class="unit-banner"><span>DCP</span></div><div class="unit-copy"><h3>Division of Cancer Prevention</h3><p>DCP conducts and supports programmes to find practical ways to prevent and detect cancer, promote screening and HPV vaccination, and prevent or relieve symptoms caused by cancer and its treatment.</p></div></article>
            <article class="organisation-card division-card division-treatment"><div class="unit-banner"><span>DCTD</span></div><div class="unit-copy"><h3>Division for Cancer Treatment and Diagnosis</h3><p>DCTD supports the translation of reliable cancer information into practical guidance that improves diagnosis, referral, treatment navigation, and support for patients and families in Zimbabwe.</p></div></article>
          </div>
        </section>

        <section class="organisation-section" id="centers">
          <h2>Centers</h2>
          <div class="organisation-grid">
            <article class="organisation-card center-card"><h3>Center for Cancer Research</h3><p>CCR brings together research partners who explore cancer patterns, patient needs, prevention, diagnosis, and care in Zimbabwe, helping turn evidence into better information and support.</p></article>
            <article class="organisation-card center-card"><h3>Center for Cancer Training</h3><p>CCT supports GCFZ's goal of training cancer advocates, community health educators, volunteers, caregivers, and early-career health professionals across Zimbabwe.</p></article>
            <article class="organisation-card center-card"><h3>Center for Global Health</h3><p>CGH coordinates research and works with regional and international partners to address the global burden of cancer while keeping programmes relevant to Zimbabwe.</p></article>
            <article class="organisation-card center-card"><h3>Center for Research Strategy</h3><p>CRS conducts analysis, evaluation, and planning activities to support strategic decision-making, programme management, partnership development, and long-term planning.</p></article>
          </div>
        </section>

        <section class="organisation-section" id="offices">
          <h2>Offices</h2>
          <div class="organisation-grid">
            <article class="organisation-card office-card"><h3>Ethics Office</h3><p>The Ethics Office manages GCFZ's ethics programme to ensure that staff, volunteers, researchers, and partners act with integrity, protect privacy, obtain informed consent, and safeguard the people and communities they serve.</p></article>
            <article class="organisation-card office-card"><h3>Office of Finance and Budget</h3><p>OFB advises GCFZ leadership on the management of financial resources and oversees budgeting, donor funds, procurement, controls, and accountable financial reporting.</p></article>
            <article class="organisation-card office-card"><h3>Office of Cancer Centers</h3><p>OCC supports relationships with cancer treatment centres, hospitals, clinics, laboratories, and partner organisations that provide cancer services across Zimbabwe.</p></article>
            <article class="organisation-card office-card"><h3>Office of Communications and Public Liaison</h3><p>OCPL leads strategic communications for GCFZ, supporting timely public information, media relations, awareness campaigns, community notices, and plain-language cancer education.</p></article>
            <article class="organisation-card office-card"><h3>Office of Data Sharing</h3><p>ODS develops and advances practices that ensure GCFZ programme and research information benefits the cancer community while respecting consent, privacy, responsible data management, and public-interest reporting.</p></article>
            <article class="organisation-card office-card"><h3>Office of Grants Administration</h3><p>OGA manages grant requirements to help GCFZ and its funding partners fulfil donor, legal, regulatory, reporting, and administrative responsibilities.</p></article>
            <article class="organisation-card office-card"><h3>Office of Management</h3><p>The Office of Management provides leadership and oversight for business functions and administrative activities, advises senior staff on management matters, and supports the systems needed for reliable day-to-day operations.</p></article>
          </div>
        </section>

      </article>
    </section>
    <a class="back-to-top" href="#" aria-label="Back to top">Back to<br>top</a>`;
}

const languageLabels = {
    en: { name: "English", label: "Language", title: "Cervical Cancer" },
    sn: { name: "Shona", label: "Mutauro", title: "Gomarara remuromo wechibereko" },
    nd: { name: "Ndebele", label: "Ulimi", title: "Umdlavuza womlomo wesibeletho" }
  };
const cervicalTranslations = {
    sn: {
      "Home": "Kumba", "Cancer Types": "Mhando dzegomarara", "Cervical Cancer": "Gomarara remuromo wechibereko", "Cervical cancer": "Gomarara remuromo wechibereko",
      "What Is Cervical Cancer?": "Gomarara remuromo wechibereko chii?", "Anatomy of the Cervix": "Maumbirwo emuromo wechibereko", "Types of Cervical Cancer": "Mhando dzegomarara remuromo wechibereko", "Learn More": "Dzidza zvakawanda",
      "Cervical cancer begins in the cells of the cervix, the lower, narrow end of the uterus that connects the uterus to the vagina.": "Gomarara remuromo wechibereko rinotangira mumasero emuromo wechibereko, chikamu chepasi chakatetepa chechibereko chinobatana nesikarudzi.",
      "Cervical cancer usually develops slowly. Before cancer forms, cervical cells may undergo abnormal changes called dysplasia. If these abnormal cells are not destroyed or removed, they may eventually become cancerous, grow deeper into the cervix and spread to nearby tissue.": "Gomarara remuromo wechibereko rinowanzokura zvishoma nezvishoma. Gomarara risati raumbwa, masero emuromo wechibereko anogona kuchinja zvisina kujairika, zvinonzi dysplasia. Kana masero aya asina kubviswa kana kuparadzwa, anogona kuzopedzisira ava gomarara, kukura mukati memuromo wechibereko uye kupararira kunyama dziri pedyo.",
      "Female reproductive system. The cervix sits at the lower end of the uterus and opens into the vagina. The uterus includes a muscular outer layer and an inner lining called the endometrium.": "Nhengo dzekubereka dzemukadzi. Muromo wechibereko uri pazasi pechibereko uye unovhurika musikarudzi. Chibereko chine nyama ine tsandanyama nechekunze uye jira remukati rinonzi endometrium.",
      "Anatomy of the cervix": "Maumbirwo emuromo wechibereko", "The cervix has two main parts:": "Muromo wechibereko une zvikamu zvikuru zviviri:",
      "Ectocervix: the outer part that can be seen during a gynaecological examination. It is covered by thin, flat squamous cells.": "Ectocervix: chikamu chekunze chinoonekwa pakuongororwa kwemadzimai. Chakafukidzwa nemasero matete akati sandara anonzi squamous cells.",
      "Endocervix: the inner part that forms the canal between the vagina and uterus. It is lined with glandular cells that produce mucus.": "Endocervix: chikamu chemukati chinoumba mugero pakati pesikarudzi nechibereko. Chine masero anogadzira hurwa.",
      "The boundary where the ectocervix and endocervix meet is called the squamocolumnar junction or transformation zone. Most cervical cancers begin in this area.": "Panobatana ectocervix neendocervix panonzi squamocolumnar junction kana transformation zone. Gomarara remuromo wechibereko rakawanda rinotangira munzvimbo iyi.",
      "Anatomy of the cervix. The diagram shows the endocervical canal, endocervix, ectocervix and the transformation zone where glandular and squamous cells meet.": "Maumbirwo emuromo wechibereko. Mufananidzo unoratidza endocervical canal, endocervix, ectocervix nenzvimbo inosangana masero eglandular nesquamous.",
      "Types of cervical cancer": "Mhando dzegomarara remuromo wechibereko", "Cervical cancers are classified according to the type of cell in which the cancer begins. The two main types are:": "Gomarara remuromo wechibereko rinopatsanurwa zvichienderana nerudzi rwesero parinotangira. Mhando mbiri huru ndidzo:",
      "Squamous cell carcinoma": "Squamous cell carcinoma", "Up to 90% of cervical cancers are squamous cell carcinomas. They develop from the squamous cells of the ectocervix.": "Kusvika pa90% yegomarara remuromo wechibereko i-squamous cell carcinoma. Rinobva mumasero esquamous eectocervix.",
      "Adenocarcinoma": "Adenocarcinoma", "Adenocarcinomas develop in the mucus-producing glandular cells of the endocervix. Clear cell adenocarcinoma is a rare subtype.": "Adenocarcinoma inokura mumasero eglandular eendocervix anogadzira hurwa. Clear cell adenocarcinoma imhando isingawanzoitika.",
      "Some cervical cancers contain features of both main types and are called mixed or adenosquamous carcinomas. Cancers arising from other cervical cell types are very rare.": "Mamwe magomarara ane zvimiro zvemhando mbiri idzi uye anonzi mixed kana adenosquamous carcinoma. Gomarara rinobva kune mamwe masero emuromo wechibereko hariwanzoitiki.",
      "Learn more about cervical cancer": "Dzidza zvakawanda nezvegomarara remuromo wechibereko", "Symptoms": "Zviratidzo", "Causes, risk factors and prevention": "Zvinokonzera, zvinhu zvinowedzera njodzi nekudzivirira", "Screening": "Kuongororwa", "HPV and Pap test results": "Mhedzisiro yeHPV nePap test", "Diagnosis": "Kuonekwa kwechirwere", "Prognosis and survival": "Mafambiro echirwere nekupona", "Stages": "Matanho", "Treatment": "Kurapwa", "Childhood cervical and vaginal cancers": "Gomarara remuromo wechibereko nesikarudzi muvana", "Coping and support": "Kurarama nechirwere nerutsigiro",
      "Possible warning signs can also be caused by less serious conditions. Seek medical advice about unusual vaginal bleeding or discharge, pain during sex, or persistent pelvic pain.": "Zviratidzo izvi zvinogonawo kukonzerwa nezvimwe zvirwere zvisina kunyanya kuoma. Tsvaga zano rezveutano kana paine kubuda ropa kana hurwa zvisina kujairika, kurwadziwa pabonde, kana kurwadza kwechiuno kusingaperi.",
      "Long-lasting infection with high-risk types of human papillomavirus (HPV) causes almost all cervical cancers. HPV vaccination, recommended screening and avoiding tobacco can reduce risk.": "Utachiona hweHPV hwemhando dzine njodzi hunogara kwenguva refu hunokonzera gomarara remuromo wechibereko rakawanda. Mushonga wekudzivirira HPV, kuongororwa kunokurudzirwa uye kusashandisa fodya zvinoderedza njodzi.",
      "Cervical screening is an important part of routine health care for people with a cervix. HPV tests and Pap tests can find high-risk HPV infection or abnormal cervical cells before cancer develops.": "Kuongororwa muromo wechibereko kwakakosha pautano hwevanhu vane muromo wechibereko. HPV test nePap test zvinogona kuona utachiona hweHPV kana masero asina kujairika gomarara risati rakura.",
      "An abnormal result does not necessarily mean cancer. Follow-up may include repeat testing, colposcopy or a biopsy, depending on the result and the person's medical history.": "Mhedzisiro isina kujairika hairevi kuti pane gomarara nguva dzose. Kuongororwa kunotevera kunogona kusanganisira kudzokorora test, colposcopy kana biopsy, zvichienderana nemhedzisiro nenhoroondo yeutano.",
      "If screening or symptoms suggest a problem, a clinician may examine the cervix, perform colposcopy and remove a tissue sample for laboratory testing.": "Kana kuongororwa kana zviratidzo zvichiratidza dambudziko, nyanzvi yezveutano inogona kuongorora muromo wechibereko, kuita colposcopy uye kutora chidimbu chenyama kuti chiongororwe murabhoritari.",
      "Outcomes depend on several factors, including the stage at diagnosis, tumour type, general health and response to treatment. Population survival statistics cannot predict an individual's outcome.": "Mhedzisiro inoenderana nezvinhu zvakawanda zvinosanganisira danho rechirwere pachaonekwa, rudzi rwebundu, utano hwemunhu uye kupindura kurapwa. Huwandu hwevanhu vanopona hahugoni kufanotaura zvichaitika kumunhu mumwe chete.",
      "Stage describes how large the cancer is and whether it has spread. Staging is an important part of planning treatment.": "Danho rinotsanangura kukura kwegomarara uye kana rapararira. Kuziva danho kwakakosha pakuronga kurapwa.",
      "Treatment may involve surgery, radiation therapy, chemotherapy, targeted therapy or immunotherapy. The recommended approach depends on the cancer's stage and individual health and fertility considerations.": "Kurapwa kunogona kusanganisira kuvhiyiwa, radiation therapy, chemotherapy, targeted therapy kana immunotherapy. Nzira inokurudzirwa inoenderana nedanho regomarara, utano hwemunhu uye nyaya dzekubereka.",
      "Cervical and vaginal cancers are very rare in children. Specialist assessment is needed when these cancers are suspected.": "Gomarara remuromo wechibereko nesikarudzi harinyanyi kuwanikwa muvana. Panodiwa kuongororwa nenyanzvi kana richifungidzirwa.",
      "Understanding what to expect and asking for emotional, practical and clinical support can help people manage diagnosis and treatment.": "Kunzwisisa zvinotarisirwa uye kukumbira rutsigiro rwemanzwiro, rwemabasa nekurapwa kunobatsira pakurarama nekuonekwa kwechirwere nekurapwa.",
      "When to seek care": "Nguva yekutsvaga rubatsiro", "This information is educational and does not replace medical advice. Speak with a qualified healthcare professional about symptoms, screening and treatment decisions.": "Mashoko aya ndeekudzidzisa uye haatsivi zano rachiremba. Taura nenyanzvi yezveutano pamusoro pezviratidzo, kuongororwa uye sarudzo dzekurapwa.", "Contact GCFZ": "Bata GCFZ", "Back totop": "Dzokera pamusoro"
    },
    nd: {
      "Home": "Ikhaya", "Cancer Types": "Imihlobo yomdlavuza", "Cervical Cancer": "Umdlavuza womlomo wesibeletho", "Cervical cancer": "Umdlavuza womlomo wesibeletho",
      "What Is Cervical Cancer?": "Uyini umdlavuza womlomo wesibeletho?", "Anatomy of the Cervix": "Ukwakheka komlomo wesibeletho", "Types of Cervical Cancer": "Imihlobo yomdlavuza womlomo wesibeletho", "Learn More": "Funda okunengi",
      "Cervical cancer begins in the cells of the cervix, the lower, narrow end of the uterus that connects the uterus to the vagina.": "Umdlavuza womlomo wesibeletho uqala kumaseli omlomo wesibeletho, ingxenye engaphansi encinyane yesibeletho exhumanisa isibeletho lesitho sangasese.",
      "Cervical cancer usually develops slowly. Before cancer forms, cervical cells may undergo abnormal changes called dysplasia. If these abnormal cells are not destroyed or removed, they may eventually become cancerous, grow deeper into the cervix and spread to nearby tissue.": "Umdlavuza womlomo wesibeletho uvame ukukhula kancane. Umdlavuza ungakabi khona, amaseli angaguquka ngendlela engajwayelekanga ebizwa ngokuthi yi-dysplasia. Nxa amaseli la engasuswanga, angaba ngumdlavuza, akhulele ngaphakathi komlomo wesibeletho futhi asabalale ezicutshini eziseduze.",
      "Female reproductive system. The cervix sits at the lower end of the uterus and opens into the vagina. The uterus includes a muscular outer layer and an inner lining called the endometrium.": "Izitho zokuzala zowesifazane. Umlomo wesibeletho ungaphansi kwesibeletho njalo uvuleka esithweni sangasese. Isibeletho silolwelwesi lwangaphandle lwemisipha lolwangaphakathi olubizwa ngokuthi yi-endometrium.",
      "Anatomy of the cervix": "Ukwakheka komlomo wesibeletho", "The cervix has two main parts:": "Umlomo wesibeletho ulengxenye ezimbili eziqakathekileyo:",
      "Ectocervix: the outer part that can be seen during a gynaecological examination. It is covered by thin, flat squamous cells.": "I-ectocervix: yingxenye yangaphandle ebonakala lapho owesifazane ehlolwa. Imbozwe ngamaseli amancane ayisicaba abizwa ngokuthi ama-squamous cells.",
      "Endocervix: the inner part that forms the canal between the vagina and uterus. It is lined with glandular cells that produce mucus.": "I-endocervix: yingxenye yangaphakathi eyakha umgudu phakathi kwesitho sangasese lesibeletho. Ilamaseli akhiqiza amafinyila.",
      "The boundary where the ectocervix and endocervix meet is called the squamocolumnar junction or transformation zone. Most cervical cancers begin in this area.": "Lapho i-ectocervix le-endocervix kuhlangana khona kubizwa ngokuthi yi-squamocolumnar junction kumbe transformation zone. Imidlavuza eminengi yomlomo wesibeletho iqala kule indawo.",
      "Anatomy of the cervix. The diagram shows the endocervical canal, endocervix, ectocervix and the transformation zone where glandular and squamous cells meet.": "Ukwakheka komlomo wesibeletho. Umdwebo utshengisa i-endocervical canal, endocervix, ectocervix lendawo lapho amaseli e-glandular lama-squamous ahlangana khona.",
      "Types of cervical cancer": "Imihlobo yomdlavuza womlomo wesibeletho", "Cervical cancers are classified according to the type of cell in which the cancer begins. The two main types are:": "Imidlavuza yomlomo wesibeletho yehlukaniswa ngomhlobo weseli lapho iqala khona. Imihlobo emibili emikhulu yile:",
      "Squamous cell carcinoma": "Squamous cell carcinoma", "Up to 90% of cervical cancers are squamous cell carcinomas. They develop from the squamous cells of the ectocervix.": "Kuze kufike ku-90% wemidlavuza yomlomo wesibeletho yi-squamous cell carcinoma. Iqala kumaseli e-squamous e-ectocervix.",
      "Adenocarcinoma": "Adenocarcinoma", "Adenocarcinomas develop in the mucus-producing glandular cells of the endocervix. Clear cell adenocarcinoma is a rare subtype.": "I-adenocarcinoma ikhula kumaseli e-glandular e-endocervix akhiqiza amafinyila. I-clear cell adenocarcinoma ngumhlobo ongavamanga.",
      "Some cervical cancers contain features of both main types and are called mixed or adenosquamous carcinomas. Cancers arising from other cervical cell types are very rare.": "Eminye imidlavuza ilezimpawu zemihlobo yomibili njalo ibizwa ngokuthi yi-mixed kumbe adenosquamous carcinoma. Imidlavuza eqala kwamanye amaseli omlomo wesibeletho ayivamanga.",
      "Learn more about cervical cancer": "Funda okunengi ngomdlavuza womlomo wesibeletho", "Symptoms": "Izimpawu", "Causes, risk factors and prevention": "Izimbangela, izinto ezandisa ingozi lokuvikela", "Screening": "Ukuhlolwa", "HPV and Pap test results": "Imiphumela ye-HPV lePap test", "Diagnosis": "Ukuxilongwa", "Prognosis and survival": "Ukuqhubeka kwesifo lokusinda", "Stages": "Izigaba", "Treatment": "Ukwelatshwa", "Childhood cervical and vaginal cancers": "Umdlavuza womlomo wesibeletho lowesitho sangasese ebantwaneni", "Coping and support": "Ukuphila lesifo lokusekelwa",
      "Possible warning signs can also be caused by less serious conditions. Seek medical advice about unusual vaginal bleeding or discharge, pain during sex, or persistent pelvic pain.": "Izimpawu lezi zingabangelwa langezinye izifo ezingelangozi enkulu. Dinga usizo lwezempilakahle nxa ulokopha kumbe uketshezi olungajwayelekanga, ubuhlungu ngesikhathi socansi, kumbe ubuhlungu obungapheliyo ngaphansi kwesisu.",
      "Long-lasting infection with high-risk types of human papillomavirus (HPV) causes almost all cervical cancers. HPV vaccination, recommended screening and avoiding tobacco can reduce risk.": "Ukutheleleka isikhathi eside ngemihlobo ye-HPV eyingozi kubangela phose yonke imidlavuza yomlomo wesibeletho. Umjovo we-HPV, ukuhlolwa okunconywayo lokungasebenzisi igwayi kunganciphisa ingozi.",
      "Cervical screening is an important part of routine health care for people with a cervix. HPV tests and Pap tests can find high-risk HPV infection or abnormal cervical cells before cancer develops.": "Ukuhlolwa komlomo wesibeletho kuqakathekile ekunakekelweni kwempilakahle. Ama-HPV test lamaPap test angathola i-HPV eyingozi kumbe amaseli angajwayelekanga umdlavuza ungakakhuli.",
      "An abnormal result does not necessarily mean cancer. Follow-up may include repeat testing, colposcopy or a biopsy, depending on the result and the person's medical history.": "Umphumela ongajwayelekanga awutsho ukuthi ngumdlavuza ngaso sonke isikhathi. Ukuhlolwa okulandelayo kungaba yikuphinda i-test, i-colposcopy kumbe i-biopsy, kusiya ngomphumela lembali yempilakahle yomuntu.",
      "If screening or symptoms suggest a problem, a clinician may examine the cervix, perform colposcopy and remove a tissue sample for laboratory testing.": "Nxa ukuhlolwa kumbe izimpawu kutshengisa uhlupho, isisebenzi sezempilakahle singahlola umlomo wesibeletho, senze i-colposcopy njalo sithathe ucezu lwenyama ukuze luhlolwe elabhorethri.",
      "Outcomes depend on several factors, including the stage at diagnosis, tumour type, general health and response to treatment. Population survival statistics cannot predict an individual's outcome.": "Imiphumela iya ngezinto ezinengi ezigoqela isigaba lapho isifo sitholakala, umhlobo wesigaxa, impilakahle yomuntu lokuphendula ekwelatshweni. Izibalo zokusinda kwabantu azikwazi ukubikezela umphumela womuntu oyedwa.",
      "Stage describes how large the cancer is and whether it has spread. Staging is an important part of planning treatment.": "Isigaba sichaza ubukhulu bomdlavuza lokuthi ususabalele yini. Ukwazi isigaba kuqakathekile ekuhleleni ukwelatshwa.",
      "Treatment may involve surgery, radiation therapy, chemotherapy, targeted therapy or immunotherapy. The recommended approach depends on the cancer's stage and individual health and fertility considerations.": "Ukwelatshwa kungagoqela ukuhlinzwa, i-radiation therapy, i-chemotherapy, i-targeted therapy kumbe i-immunotherapy. Indlela enconywayo iya ngesigaba somdlavuza, impilakahle yomuntu lezindaba zokuzala.",
      "Cervical and vaginal cancers are very rare in children. Specialist assessment is needed when these cancers are suspected.": "Umdlavuza womlomo wesibeletho lowesitho sangasese awuvamanga ebantwaneni. Kudingeka ukuhlolwa yingcitshi nxa umdlavuza lo ucatshangelwa.",
      "Understanding what to expect and asking for emotional, practical and clinical support can help people manage diagnosis and treatment.": "Ukwazi okumele kulindelwe lokucela usekelo lwemizwa, lwemisebenzi lolwezempilakahle kunganceda umuntu aphile lokuxilongwa kanye lokwelatshwa.",
      "When to seek care": "Isikhathi sokudinga uncedo", "This information is educational and does not replace medical advice. Speak with a qualified healthcare professional about symptoms, screening and treatment decisions.": "Ulwazi lolu ngolokufundisa njalo aluthathi indawo yeseluleko sikadokotela. Khuluma lesisebenzi sezempilakahle esiqeqetshiweyo ngezimpawu, ukuhlolwa kanye lezinqumo zokwelatshwa.", "Contact GCFZ": "Thintana leGCFZ", "Back totop": "Buyela phezulu"
    }
  };

function setupCervicalLanguageSwitcher() {
  const cervicalMain = document.querySelector("main");
  const translatableElements = [...cervicalMain.querySelectorAll(".breadcrumbs a, .breadcrumbs span:last-child, .cervical-nav h2, .cervical-nav a, .cervical-content .section-label, .cervical-content h1, .cervical-content h2, .cervical-content h3, .cervical-content p, .cervical-content li, .cervical-content figcaption, .cervical-care-note a")];
  translatableElements.forEach((element) => { element.dataset.english = element.textContent.trim(); });
  const languageControl = document.createElement("div");
  languageControl.className = "language-switcher";
  languageControl.innerHTML = `<div role="group" aria-label="Choose page language"><button type="button" data-language="en">English</button><button type="button" data-language="sn">Shona</button><button type="button" data-language="nd">Ndebele</button></div>`;
  document.querySelector(".cervical-content .section-label").after(languageControl);

  const setCervicalLanguage = (language) => {
    const translations = cervicalTranslations[language] || {};
    translatableElements.forEach((element) => {
      const translated = translations[element.dataset.english];
      element.textContent = language === "en" ? element.dataset.english : (translated || element.dataset.english);
    });
    languageControl.querySelectorAll("button").forEach((button) => {
      const active = button.dataset.language === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.documentElement.lang = language === "sn" ? "sn" : language === "nd" ? "nd" : "en";
    document.title = `${languageLabels[language].title} | GCFZ`;
    localStorage.setItem("gcfz-cervical-language", language);
  };

  languageControl.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-language]");
    if (button) setCervicalLanguage(button.dataset.language);
  });
  setCervicalLanguage(localStorage.getItem("gcfz-cervical-language") || "en");
}

if (key === "cervical-cancer") {
  document.body.classList.add("cervical-page");
  document.querySelector("main").innerHTML = `
    <div class="breadcrumbs"><a href="index.html">Home</a><span>&rsaquo;</span><a href="cancer-types.html">Cancer Types</a><span>&rsaquo;</span><span>Cervical Cancer</span></div>
    <section class="cervical-layout">
      <aside class="cervical-nav" aria-label="Cervical cancer topics">
        <h2>Cervical Cancer</h2>
        <a href="#overview">What Is Cervical Cancer?</a>
        <a href="#anatomy">Anatomy of the Cervix</a>
        <a href="#types">Types of Cervical Cancer</a>
        <a href="#learn-more">Learn More</a>
      </aside>
      <article class="cervical-content">
        <p class="section-label">Cervical cancer</p>
        <h1>What Is Cervical Cancer?</h1>

        <section id="overview">
          <p class="cervical-lead">Cervical cancer begins in the cells of the cervix, the lower, narrow end of the uterus that connects the uterus to the vagina.</p>
          <p>Cervical cancer usually develops slowly. Before cancer forms, cervical cells may undergo abnormal changes called dysplasia. If these abnormal cells are not destroyed or removed, they may eventually become cancerous, grow deeper into the cervix and spread to nearby tissue.</p>
          <figure class="cervical-figure">
            <a href="assets/images/cervical-female-reproductive-system.jpg?v=20260918-2" target="_blank" aria-label="Open a larger view of the female reproductive system diagram">
              <img src="assets/images/cervical-female-reproductive-system.jpg?v=20260918-2" alt="Diagram showing the uterus, uterine lining, ovaries, fallopian tubes, cervix and vagina">
            </a>
            <figcaption><strong>Female reproductive system.</strong> The cervix sits at the lower end of the uterus and opens into the vagina. The uterus includes a muscular outer layer and an inner lining called the endometrium.</figcaption>
          </figure>
        </section>

        <section id="anatomy">
          <h2>Anatomy of the cervix</h2>
          <p>The cervix has two main parts:</p>
          <ul>
            <li><strong>Ectocervix:</strong> the outer part that can be seen during a gynaecological examination. It is covered by thin, flat squamous cells.</li>
            <li><strong>Endocervix:</strong> the inner part that forms the canal between the vagina and uterus. It is lined with glandular cells that produce mucus.</li>
          </ul>
          <p>The boundary where the ectocervix and endocervix meet is called the squamocolumnar junction or transformation zone. Most cervical cancers begin in this area.</p>
          <figure class="cervical-figure">
            <a href="assets/images/cervix-anatomy.jpg?v=20260918-2" target="_blank" aria-label="Open a larger view of the cervix anatomy diagram">
              <img src="assets/images/cervix-anatomy.jpg?v=20260918-2" alt="Diagram of the cervix showing the endocervix, ectocervix, cervical canal, internal and external openings, and transformation zone">
            </a>
            <figcaption><strong>Anatomy of the cervix.</strong> The diagram shows the endocervical canal, endocervix, ectocervix and the transformation zone where glandular and squamous cells meet.</figcaption>
          </figure>
        </section>

        <section id="types">
          <h2>Types of cervical cancer</h2>
          <p>Cervical cancers are classified according to the type of cell in which the cancer begins. The two main types are:</p>
          <div class="cervical-type-grid">
            <article><h3>Squamous cell carcinoma</h3><p>Up to 90% of cervical cancers are squamous cell carcinomas. They develop from the squamous cells of the ectocervix.</p></article>
            <article><h3>Adenocarcinoma</h3><p>Adenocarcinomas develop in the mucus-producing glandular cells of the endocervix. Clear cell adenocarcinoma is a rare subtype.</p></article>
          </div>
          <p>Some cervical cancers contain features of both main types and are called mixed or adenosquamous carcinomas. Cancers arising from other cervical cell types are very rare.</p>
        </section>

        <section id="learn-more">
          <h2>Learn more about cervical cancer</h2>
          <div class="cervical-topic-list">
            <section id="symptoms"><h3>Symptoms</h3><p>Possible warning signs can also be caused by less serious conditions. Seek medical advice about unusual vaginal bleeding or discharge, pain during sex, or persistent pelvic pain.</p></section>
            <section id="causes"><h3>Causes, risk factors and prevention</h3><p>Long-lasting infection with high-risk types of human papillomavirus (HPV) causes almost all cervical cancers. HPV vaccination, recommended screening and avoiding tobacco can reduce risk.</p></section>
            <section id="screening"><h3>Screening</h3><p>Cervical screening is an important part of routine health care for people with a cervix. HPV tests and Pap tests can find high-risk HPV infection or abnormal cervical cells before cancer develops.</p></section>
            <section id="test-results"><h3>HPV and Pap test results</h3><p>An abnormal result does not necessarily mean cancer. Follow-up may include repeat testing, colposcopy or a biopsy, depending on the result and the person's medical history.</p></section>
            <section id="diagnosis"><h3>Diagnosis</h3><p>If screening or symptoms suggest a problem, a clinician may examine the cervix, perform colposcopy and remove a tissue sample for laboratory testing.</p></section>
            <section id="prognosis"><h3>Prognosis and survival</h3><p>Outcomes depend on several factors, including the stage at diagnosis, tumour type, general health and response to treatment. Population survival statistics cannot predict an individual's outcome.</p></section>
            <section id="stages"><h3>Stages</h3><p>Stage describes how large the cancer is and whether it has spread. Staging is an important part of planning treatment.</p></section>
            <section id="treatment"><h3>Treatment</h3><p>Treatment may involve surgery, radiation therapy, chemotherapy, targeted therapy or immunotherapy. The recommended approach depends on the cancer's stage and individual health and fertility considerations.</p></section>
            <section id="childhood"><h3>Childhood cervical and vaginal cancers</h3><p>Cervical and vaginal cancers are very rare in children. Specialist assessment is needed when these cancers are suspected.</p></section>
            <section id="coping"><h3>Coping and support</h3><p>Understanding what to expect and asking for emotional, practical and clinical support can help people manage diagnosis and treatment.</p></section>
          </div>
        </section>

        <aside class="cervical-care-note" aria-label="Medical information notice">
          <h2>When to seek care</h2>
          <p>This information is educational and does not replace medical advice. Speak with a qualified healthcare professional about symptoms, screening and treatment decisions.</p>
          <a class="button primary" href="contact.html">Contact GCFZ</a>
        </aside>

      </article>
    </section>
    <a class="back-to-top" href="#" aria-label="Back to top">Back to<br>top</a>`;
  setupCervicalLanguageSwitcher();
}

if (key === "cancer-blog") {
  document.body.classList.add("cancer-blog-page");
  document.querySelector("main").innerHTML = `
    <div class="breadcrumbs"><a href="index.html">Home</a><span>&rsaquo;</span><a href="news-events.html">News and Events</a><span>&rsaquo;</span><span>Cancer Awareness Blog</span></div>
    <section class="blog-layout"><article class="blog-content"><p class="section-label">GCFZ perspectives</p><h1>Cancer Awareness Blog</h1><p class="blog-intro">Plain-language updates about cancer prevention, screening, treatment, research and support, with a focus on women and communities in Zimbabwe.</p><div class="blog-feed">
      <article class="blog-post-card"><img src="assets/images/cervical-female-reproductive-system.jpg?v=20260918-2" alt="Diagram of the female reproductive system"><div><span>Screening and early detection</span><h2><a href="information.html?topic=cervical-cancer">Why cervical screening matters for women living with HIV</a></h2><p>Persistent high-risk HPV infection causes almost all cervical cancers. Learn why regular screening and timely follow-up are especially important for women living with HIV.</p><time datetime="2026-09-18">September 18, 2026</time></div></article>
      <article class="blog-post-card"><img src="assets/images/community-awareness-v2.png" alt="Women taking part in a community cancer awareness session"><div><span>Prevention</span><h2><a href="information.html?topic=causes-prevention">Turning cancer awareness into practical prevention</a></h2><p>Community education can help people understand risk factors, ask about vaccination and screening, and seek qualified care when symptoms persist.</p><time datetime="2026-09-05">September 5, 2026</time></div></article>
      <article class="blog-post-card"><img src="assets/images/treatment-consultation.png" alt="A doctor discussing cancer care with a patient"><div><span>Survivorship and supportive care</span><h2><a href="information.html?topic=treatment">Questions to take to a cancer treatment appointment</a></h2><p>A short list of questions can help patients understand treatment goals, side effects, follow-up plans and available support.</p><time datetime="2026-08-22">August 22, 2026</time></div></article>
    </div><p class="blog-source">GCFZ content is written for local awareness and does not replace medical advice.</p></article><aside class="blog-sidebar"><section><h2>Categories</h2><ul><li>Prevention</li><li>Screening and early detection</li><li>Treatment</li><li>Cancer disparities</li><li>Global health</li><li>Survivorship and supportive care</li></ul></section><section><h2>Archive</h2><p><strong>2026</strong> (3)</p></section><section><h2>Events</h2><a href="news-events.html#events">View upcoming GCFZ events</a></section></aside></section>
    <a class="back-to-top" href="#" aria-label="Back to top">Back to<br>top</a>`;
}

if (key === "understanding-cancer") {
  document.body.classList.add("understanding-page");
  document.querySelector("main").innerHTML = `
    <div class="breadcrumbs"><a href="index.html">Home</a><span>&rsaquo;</span><a href="about-cancer.html">About Cancer</a><span>&rsaquo;</span><span>Understanding Cancer</span></div>
    <section class="understanding-layout">
      <aside class="understanding-nav" aria-label="Understanding cancer topics">
        <h2>Understanding Cancer</h2>
        <a href="#what-is-cancer">What Is Cancer?</a>
        <a href="#zimbabwe">Cancer in Zimbabwe</a>
        <a href="#disparities">Cancer Disparities</a>
      </aside>
      <article class="understanding-content">
        <p class="section-label">Cancer information</p>
        <h1>Understanding Cancer</h1>
        <div class="understanding-lead"><p>Cancer is not one disease. It is a group of related diseases that can begin almost anywhere in the body. Understanding how cancer develops, how it is measured and why it affects communities differently can help people make informed health decisions.</p></div>

        <div class="understanding-card-grid" aria-label="Understanding cancer topics">
          <a class="understanding-card" href="#what-is-cancer"><img src="assets/images/laboratory-research-v2.png" alt="A laboratory professional studying cells"><div><h2>What Is Cancer?</h2><p>Understand how cancer cells differ from normal cells and how they can grow and spread.</p></div></a>
          <a class="understanding-card" href="#zimbabwe"><img src="assets/images/zimbabwe-map.jpg" alt="Map of Zimbabwe"><div><h2>Cancer in Zimbabwe</h2><p>Learn how cancer information is collected and used to understand Zimbabwe's cancer burden.</p></div></a>
          <a class="understanding-card" href="#disparities"><img src="assets/images/community-awareness-v2.png" alt="Zimbabwean women taking part in a community health discussion"><div><h2>Cancer Disparities</h2><p>Explore factors that can create unequal access to prevention, screening, diagnosis and treatment.</p></div></a>
        </div>

        <section class="understanding-section" id="what-is-cancer">
          <div><p class="section-label">The basics</p><h2>What is cancer?</h2></div>
          <div><p>The body is made of trillions of cells. Normally, cells grow, divide and die in a controlled way. Cancer develops when changes in genes cause some cells to grow when they should not, avoid normal cell death or behave abnormally.</p><p>These abnormal cells may form a mass called a tumour. Some cancers, including leukaemias, do not usually form solid tumours. A cancer can invade nearby tissue and may spread through the blood or lymphatic system to another part of the body. This spread is called metastasis.</p><p>Each cancer is different. Its behaviour, treatment and outlook depend on the type of cell where it began, its biological features, how far it has spread and the person's overall health.</p></div>
        </section>

        <section class="understanding-section" id="zimbabwe">
          <div><p class="section-label">Our national picture</p><h2>Cancer in Zimbabwe</h2></div>
          <div><p>Cancer is an important and growing public-health concern in Zimbabwe. Cervical cancer, breast cancer, prostate cancer and Kaposi sarcoma are among the cancers that place a substantial burden on families and health services.</p><p>The Zimbabwe National Cancer Registry records cancer diagnoses and helps describe which cancers occur, who is affected and how patterns change over time. National data, together with estimates from international health agencies, supports planning for vaccination, screening, treatment and palliative care.</p><p>Figures are estimates and may not capture every person affected by cancer. Improving diagnosis, reporting and registry coverage helps Zimbabwe plan services using a clearer national picture.</p><aside class="zimbabwe-stat-note"><strong>Cervical cancer remains a priority.</strong><span>WHO and IARC estimated about 3,520 new cervical cancer cases in Zimbabwe in 2023, showing the importance of HPV vaccination, screening and timely treatment.</span></aside></div>
        </section>

        <section class="understanding-section" id="disparities">
          <div><p class="section-label">Fair access to care</p><h2>Cancer disparities in Zimbabwe</h2></div>
          <div><p>Not everyone has the same opportunity to prevent cancer, receive screening or begin treatment early. Distance from specialist services, transport costs, household income, health information, stigma and shortages of trained staff or equipment can all affect care.</p><p>People in rural and underserved communities may need to travel long distances for diagnosis and treatment. Women living with HIV also face a higher risk of cervical cancer and may need closer access to appropriate screening and follow-up.</p><p>Reducing disparities requires clear local-language information, community outreach, affordable services, strong referral pathways and respectful care. Earlier diagnosis and reliable follow-up can improve outcomes.</p></div>
        </section>

        <section class="understanding-actions"><div><h2>Take the next step</h2><p>Learn about prevention, screening and symptoms, or speak with GCFZ about local information and support.</p></div><div><a class="button primary" href="information.html?topic=screening">Screening information</a><a class="button secondary" href="contact.html">Contact GCFZ</a></div></section>
        <p class="understanding-source">Information reviewed against World Health Organization cancer guidance, WHO Zimbabwe reporting and International Agency for Research on Cancer estimates. This page provides general education and does not replace medical advice.</p>
      </article>
    </section>
    <a class="back-to-top" href="#" aria-label="Back to top">Back to<br>top</a>`;
}

if (key === "screening") {
  document.body.classList.add("screening-page");
  document.querySelector("main").innerHTML = `
    <div class="breadcrumbs"><a href="index.html">Home</a><span>&rsaquo;</span><a href="about-cancer.html">About Cancer</a><span>&rsaquo;</span><span>Gynaecological Cancer Screening</span></div>
    <section class="screening-layout">
      <aside class="screening-nav" aria-label="Cancer screening topics">
        <h2>Gynaecological Cancer Screening</h2>
        <a href="#overview">Screening Overview</a>
        <a href="#tests">Screening Tests</a>
        <a href="#benefits-risks">Benefits and Limitations</a>
        <a href="#prepare">Before Your Appointment</a>
      </aside>
      <article class="screening-content">
        <p class="section-label">Early detection</p>
        <h1>Gynaecological Cancer Screening</h1>
        <p class="screening-lead">Screening means checking for cancer, or for abnormal cells that may become cancer, in people who do not have symptoms. Cervical cancer is the only gynaecological cancer with established routine screening tests. For other gynaecological cancers, knowing your risk and reporting symptoms promptly are especially important.</p>

        <div class="screening-card-grid">
          <a class="screening-card" href="#overview"><img src="assets/images/diagnosis-symptoms.png" alt="A healthcare professional discussing screening with a patient"><div><h2>Screening Overview</h2><p>Understand the difference between routine screening, risk assessment and diagnostic testing.</p></div></a>
          <a class="screening-card" href="#tests"><img src="assets/images/cervix-anatomy.jpg?v=20260918-2" alt="Medical diagram showing the cervix"><div><h2>Cervical Screening Tests</h2><p>Learn how HPV tests, Pap tests and visual inspection can help prevent or detect cervical cancer.</p></div></a>
        </div>

        <section class="screening-section" id="overview">
          <div><p class="section-label">Overview</p><h2>What screening can do</h2></div>
          <div><p>Screening is used before symptoms appear. It is different from diagnostic testing, which is used when a person has symptoms or an abnormal screening result.</p><p>Cervical screening may find high-risk HPV infection or precancerous cell changes that can be treated before cancer develops. Screening does not prevent every cancer and does not guarantee that cancer is absent.</p><p>Your age, medical history, family history, HIV status and previous results can affect which tests are appropriate. Ask a qualified healthcare professional what is recommended for you.</p></div>
        </section>

        <section class="screening-section" id="tests">
          <div><p class="section-label">Tests and checks</p><h2>Gynaecological cancers</h2></div>
          <div class="screening-test-list">
            <article><h3>Cervical cancer</h3><p>HPV testing, Pap testing and visual inspection methods can identify high-risk HPV infection or abnormal cervical cells. People living with HIV may need earlier or more frequent screening based on clinical guidance.</p><a href="information.html?topic=cervical-cancer">Cervical cancer information</a></article>
            <article><h3>Ovarian cancer</h3><p>There is no recommended routine screening test for ovarian cancer in people without symptoms who are at average risk. People with a strong family history may need specialist risk assessment.</p><a href="information.html?topic=ovarian-cancer">Ovarian cancer information</a></article>
            <article><h3>Uterine cancer</h3><p>There is no routine screening test for uterine cancer in people without symptoms. Unusual bleeding, especially after menopause, should be assessed promptly.</p><a href="information.html?topic=uterine-cancer">Uterine cancer information</a></article>
            <article><h3>Vaginal and vulvar cancers</h3><p>There are no routine screening tests for vaginal or vulvar cancer in people at average risk. Report persistent itching, skin changes, sores, lumps, bleeding or discharge.</p><a href="information.html?topic=vulvar-cancer">Vulvar cancer information</a></article>
          </div>
        </section>

        <section class="screening-section" id="benefits-risks">
          <div><p class="section-label">Informed choice</p><h2>Benefits and limitations</h2></div>
          <div><h3>Possible benefits of cervical screening</h3><ul><li>Finding high-risk HPV infection or abnormal cervical cells before cancer develops.</li><li>Allowing precancerous changes to be monitored or treated.</li><li>Finding some cervical cancers at an earlier stage.</li></ul><h3>Possible limitations</h3><ul><li>A false-positive result can lead to worry and additional procedures.</li><li>A false-negative result may miss changes that are present.</li><li>A cervical screening test does not screen for ovarian, uterine, vaginal or vulvar cancer.</li><li>Every abnormal result needs appropriate and timely follow-up.</li></ul></div>
        </section>

        <section class="screening-section" id="prepare">
          <div><p class="section-label">Be prepared</p><h2>Before your appointment</h2></div>
          <div><ul class="screening-checklist"><li>Ask which screening test is being offered and why.</li><li>Tell the healthcare professional about symptoms, medicines and your family history.</li><li>Ask how to prepare and whether the test has any risks.</li><li>Find out when and how you will receive the result.</li><li>Ask what happens if the result is abnormal and where follow-up care is available.</li></ul><aside class="screening-alert"><strong>Do not wait for screening if you have symptoms.</strong><p>Screening is intended for people without symptoms. Contact a healthcare professional about a new lump, unusual bleeding, unexplained weight loss, persistent pain or another change that concerns you.</p></aside></div>
        </section>

        <section class="screening-actions"><div><h2>Talk with a healthcare professional</h2><p>GCFZ can provide general information and help you ask the right questions about available screening services.</p></div><a class="button primary" href="contact.html">Contact GCFZ</a></section>
        <p class="screening-source">This page provides general education and does not replace individual medical advice. Cervical cancer is the only gynaecological cancer with recommended routine screening tests for people at average risk. Screening guidance and available services can change.</p>
      </article>
    </section>
    <a class="back-to-top" href="#" aria-label="Back to top">Back to<br>top</a>`;
}

if (key === "coping") {
  document.body.classList.add("coping-page");
  document.querySelector("main").innerHTML = `
    <div class="breadcrumbs"><a href="index.html">Home</a><span>&rsaquo;</span><a href="about-cancer.html">About Cancer</a><span>&rsaquo;</span><span>Coping with Cancer</span></div>
    <section class="coping-layout">
      <aside class="coping-nav" aria-label="Coping with cancer topics">
        <h2>Coping with Cancer</h2>
        <a href="#mental-health">Emotions and Cancer</a>
        <a href="#living-with-cancer">Adjusting to Cancer</a>
        <a href="#self-image">Self-Image and Sexuality</a>
        <a href="#daily-life">Day-to-Day Life</a>
        <a href="#caregivers">Support for Caregivers</a>
        <a href="#survivorship">Survivorship</a>
        <a href="#questions">Questions to Ask</a>
      </aside>
      <article class="coping-content">
        <p class="section-label">Support and wellbeing</p>
        <h1>Coping with Cancer</h1>
        <div class="coping-intro">
          <div><p>Learning that you or someone close to you has cancer can change everyday life. Treatment, physical symptoms and uncertainty can affect emotions, relationships, work and family responsibilities.</p><p>This section offers practical starting points for patients, survivors, families and caregivers. You do not have to manage every concern alone. Ask your healthcare team and people you trust for support.</p></div>
          <aside><h2>Need support?</h2><p>GCFZ can help you find cancer information and discuss available local support.</p><a class="button primary" href="contact.html">Contact GCFZ</a></aside>
        </div>

        <section class="coping-group" id="mental-health">
          <h2>Mental Health and Cancer</h2>
          <div class="coping-card-grid">
            <article class="coping-card"><img src="assets/images/treatment-supportive-care.png" alt="A patient receiving compassionate support"><div><h3>Emotions and Cancer</h3><p>Fear, anger, sadness and uncertainty are common. Learn ways to name your feelings, speak with people you trust and ask for professional support.</p><a href="#emotional-support">Explore emotional support</a></div></article>
            <article class="coping-card" id="self-image"><img src="assets/images/hero-consultation-v2.png" alt="A woman talking with a healthcare professional"><div><h3>Self-Image and Sexuality</h3><p>Cancer and treatment can affect body image, confidence, intimacy and sexual health. Honest conversations can help you manage changes.</p><a href="#emotional-support">Read practical guidance</a></div></article>
            <article class="coping-card"><img src="assets/images/community-awareness-v2.png" alt="Women speaking together in a supportive group"><div><h3>Stress and Cancer</h3><p>Small routines, rest, movement and supportive conversations can help reduce stress during diagnosis and treatment.</p><a href="#emotional-support">Ways to manage stress</a></div></article>
          </div>
        </section>

        <section class="coping-group" id="living-with-cancer">
          <h2>Living with Cancer</h2>
          <div class="coping-card-grid">
            <article class="coping-card"><img src="assets/images/treatment-consultation.png" alt="A patient discussing care with a doctor"><div><h3>Adjusting to Cancer</h3><p>Give yourself time to adjust. Focus on the information and decisions needed now, and let others help with practical tasks.</p><a href="#practical-guidance">How to adjust</a></div></article>
            <article class="coping-card" id="daily-life"><img src="assets/images/community-awareness.png" alt="Women connecting during a community programme"><div><h3>Daily Life</h3><p>Plan around your energy, appointments and symptoms. Clear communication can make work, parenting and household routines easier.</p><a href="#practical-guidance">Plan day-to-day life</a></div></article>
            <article class="coping-card" id="survivorship"><img src="assets/images/hero-consultation.png" alt="A woman receiving supportive health guidance"><div><h3>Cancer Survivorship</h3><p>Life after treatment may include follow-up care, lasting side effects and emotional adjustment. A care plan can help.</p><a href="#follow-up">Learn about survivorship</a></div></article>
          </div>
        </section>

        <section class="coping-group" id="patient-family-support">
          <h2>Patient and Family Support</h2>
          <div class="coping-card-grid">
            <article class="coping-card" id="questions"><img src="assets/images/diagnosis-staging.png" alt="A healthcare professional explaining medical information"><div><h3>Questions to Ask Your Doctor</h3><p>Take written questions to appointments and ask about the diagnosis, treatment goals, side effects, costs and next steps.</p><a href="#questions-list">Prepare your questions</a></div></article>
            <article class="coping-card" id="caregivers"><img src="assets/images/treatment-supportive-care.png" alt="A caregiver supporting a patient"><div><h3>Support for Caregivers</h3><p>Caring for someone can be demanding. Share responsibilities, protect time for rest and ask for help before you feel overwhelmed.</p><a href="#caregiver-guidance">Caregiver guidance</a></div></article>
            <article class="coping-card"><img src="assets/images/treatment-infusion.png" alt="A patient receiving cancer treatment"><div><h3>Follow-Up Medical Care</h3><p>Keep appointments and ask for a written follow-up plan covering tests, symptoms to report and management of side effects.</p><a href="#follow-up">Plan follow-up care</a></div></article>
          </div>
        </section>

        <section class="coping-details" aria-label="Practical coping guidance">
          <section id="emotional-support"><h2>Looking after your emotional health</h2><p>Talk to someone you trust about how you are feeling. A counsellor, social worker, spiritual leader or support group may also help. Tell your healthcare team if distress, low mood, fear or sleep problems are making daily life difficult.</p></section>
          <section id="practical-guidance"><h2>Practical guidance</h2><p>Keep one notebook for appointments, medicines and questions. Accept specific offers of help such as transport, meals or childcare. On difficult days, choose the most important task and allow the rest to wait.</p></section>
          <section id="questions-list"><h2>Questions for your healthcare team</h2><ul><li>What is the goal of my treatment?</li><li>Which side effects should I report urgently?</li><li>Who should I contact after clinic hours?</li><li>What support is available for my family or caregiver?</li></ul></section>
          <section id="caregiver-guidance"><h2>For caregivers</h2><p>Ask the patient what support they want and include them in decisions. Keep your own medical appointments, rest when possible and arrange backup help. Needing a break does not mean you are failing.</p></section>
          <section id="follow-up"><h2>After treatment</h2><p>Ask for a follow-up care plan that records your treatment, future appointments and possible late effects. Contact your healthcare team about new symptoms rather than waiting for the next scheduled visit.</p></section>
        </section>

        <aside class="coping-care-note"><strong>Medical information notice</strong><p>This information supports, but does not replace, advice from a qualified healthcare professional. Seek urgent medical help if you feel unsafe or have severe symptoms.</p></aside>
      </article>
    </section>
    <a class="back-to-top" href="#" aria-label="Back to top">Back to<br>top</a>`;
}

if (key === "treatment") {
  document.body.classList.add("treatment-page");
  document.querySelector("main").innerHTML = `
    <div class="breadcrumbs"><a href="index.html">Home</a><span>&rsaquo;</span><span>Cancer Treatment</span></div>
    <section class="treatment-layout">
      <aside class="treatment-nav" aria-label="Cancer treatment topics">
        <h2>Cancer Treatment</h2>
        <a href="#types">Types of Cancer Treatment</a>
        <a href="#side-effects">Side Effects of Treatment</a>
        <a href="#drugs">Cancer Drugs</a>
        <a href="#complementary">Complementary Care</a>
        <a href="#questions">Questions to Ask</a>
        <a href="#centres">Treatment Centres</a>
      </aside>
      <article class="treatment-content">
        <h1>Cancer Treatment</h1>
        <p class="treatment-intro">When you need treatment for cancer, there is a lot to learn and think about. Talking with your healthcare team and understanding your options can help you make informed decisions about your care.</p>
        <div class="treatment-grid">
          <section class="treatment-card" id="types">
            <img src="assets/images/treatment-infusion.png" alt="A Zimbabwean patient receiving infusion treatment with support from an oncology nurse">
            <div><h2>Types of Cancer Treatment</h2><p>Learn about surgery, chemotherapy, radiation therapy, immunotherapy, targeted therapy and other treatment approaches.</p></div>
          </section>
          <section class="treatment-card" id="side-effects">
            <img src="assets/images/treatment-consultation.png" alt="A doctor discussing cancer treatment with a patient">
            <div><h2>Side Effects of Cancer Treatment</h2><p>Learn how your healthcare team can help prevent, manage or treat side effects caused by cancer treatment.</p></div>
          </section>
          <section class="treatment-card" id="questions">
            <img src="assets/images/treatment-consultation.png" alt="A patient asking a doctor questions about cancer care">
            <div><h2>Questions to Ask About Treatment</h2><p>Prepare questions about treatment choices, expected benefits, possible side effects and what happens next.</p></div>
          </section>
          <section class="treatment-card" id="drugs">
            <img src="assets/images/treatment-infusion.png" alt="Cancer medicine being given safely in a treatment clinic">
            <div><h2>Cancer Drugs</h2><p>Understand how cancer medicines are used, why combinations may be recommended and how treatment is monitored.</p></div>
          </section>
          <section class="treatment-card" id="complementary">
            <img src="assets/images/treatment-supportive-care.png" alt="A patient practising guided breathing with a supportive care practitioner">
            <div><h2>Complementary and Supportive Care</h2><p>Explore safe supportive approaches that may help with wellbeing alongside your medical cancer treatment.</p></div>
          </section>
          <section class="treatment-card treatment-map-card" id="centres">
            <div class="zimbabwe-map" role="img" aria-label="Blue map of Zimbabwe">
              <img src="assets/images/zimbabwe-map.jpg" alt="Map of Zimbabwe divided into provinces">
              <span class="harare-marker" aria-hidden="true"></span>
              <span class="harare-label">Harare</span>
            </div>
            <div><h2>Find Cancer Treatment in Zimbabwe</h2><p>Contact GCFZ for guidance on finding cancer treatment services and support available in Zimbabwe.</p><a href="contact.html">Contact GCFZ</a></div>
          </section>
        </div>
      </article>
    </section>
    <a class="back-to-top" href="#" aria-label="Back to top">Back to<br>top</a>`;
}

if (key === "causes-prevention") {
  document.body.classList.add("prevention-page");
  document.querySelector("main").innerHTML = `
    <div class="breadcrumbs"><a href="index.html">Home</a><span>&rsaquo;</span><a href="about-cancer.html">About Cancer</a><span>&rsaquo;</span><span>Causes and Prevention</span></div>
    <section class="prevention-layout">
      <aside class="prevention-nav" aria-label="Causes and prevention topics">
        <h2>Cancer Causes and Prevention</h2>
        <a href="#risk-factors">Risk Factors</a>
        <a href="#genetics">Genetics</a>
        <a href="#prevention-overview">Cancer Prevention Overview</a>
        <a href="#prevention-research">Research</a>
      </aside>
      <article class="prevention-content">
        <h1>Causes and Prevention</h1>
        <p class="prevention-intro">Cancer prevention means taking action to lower the risk of developing cancer. This can include maintaining a healthy lifestyle, avoiding exposure to known cancer-causing substances, attending recommended screening and discussing suitable vaccines or medicines with a healthcare professional.</p>
        <div class="prevention-grid">
          <section class="prevention-card" id="risk-factors">
            <h2>Risk Factors for Cancer</h2>
            <p>Learn about behaviours, exposures and other factors that may influence the risk of cancer.</p>
          </section>
          <section class="prevention-card" id="genetics">
            <h2>The Genetics of Cancer</h2>
            <p>Learn how inherited and acquired genetic changes can affect cancer risk, and when genetic counselling may help.</p>
          </section>
          <section class="prevention-card" id="prevention-overview">
            <h2>Cancer Prevention Overview</h2>
            <p>Learn about known and potential cancer risk factors and practical ways to reduce cancer risk.</p>
          </section>
          <section class="prevention-card" id="prevention-research">
            <h2>Prevention Research</h2>
            <p>Explore how research improves understanding of cancer causes, prevention, vaccination and early detection.</p>
          </section>
        </div>
      </article>
    </section>
    <a class="back-to-top" href="#" aria-label="Back to top">Back to<br>top</a>`;
}

if (key === "diagnosis-staging") {
  document.body.classList.add("diagnosis-page");
  document.querySelector("main").innerHTML = `
    <div class="breadcrumbs"><a href="index.html">Home</a><span>&rsaquo;</span><a href="about-cancer.html">About Cancer</a><span>&rsaquo;</span><span>Diagnosis and Staging</span></div>
    <section class="diagnosis-layout">
      <aside class="diagnosis-nav" aria-label="Diagnosis and staging topics">
        <h2>Diagnosis and Staging</h2>
        <a href="#symptoms">Symptoms</a>
        <a href="#diagnosis">Diagnosis</a>
        <a href="#staging">Staging</a>
        <a href="#prognosis">Prognosis</a>
        <a href="#diagnosis-questions">Questions to Ask</a>
        <a href="#diagnosis-research">Research</a>
      </aside>
      <article class="diagnosis-content">
        <h1>Diagnosis and Staging</h1>
        <div class="diagnosis-intro">
          <p>Cancer can cause many different symptoms. Most often these symptoms are not caused by cancer, but by other health conditions. If symptoms last for a couple of weeks or concern you, a healthcare professional can examine you and arrange tests to find the cause.</p>
          <p>If cancer is diagnosed, further tests may help determine its stage. The stage describes the size of the cancer and whether it has spread. This information helps your healthcare team recommend treatment and discuss what you can expect.</p>
        </div>
        <div class="diagnosis-grid">
          <section class="diagnosis-card" id="symptoms"><img src="assets/images/diagnosis-symptoms.png" alt="A doctor checking a patient's neck during a symptom assessment"><div><h2>Symptoms</h2><p>Cancer can cause many different symptoms. Only a qualified healthcare professional can determine what is causing yours.</p></div></section>
          <section class="diagnosis-card" id="diagnosis"><img src="assets/images/treatment-consultation.png" alt="A doctor discussing test information with a patient"><div><h2>How Cancer Is Diagnosed</h2><p>Learn about examinations, tests and procedures that healthcare professionals may use to diagnose cancer.</p></div></section>
          <section class="diagnosis-card" id="staging"><img src="assets/images/diagnosis-staging.png" alt="A radiologist reviewing medical scans with a patient"><div><h2>Staging</h2><p>Stage describes details such as tumour size and whether the cancer has spread. It helps guide treatment decisions.</p></div></section>
          <section class="diagnosis-card" id="prognosis"><img src="assets/images/treatment-infusion.png" alt="A patient receiving compassionate support during cancer care"><div><h2>Understanding Cancer Prognosis</h2><p>Prognosis describes the likely course of cancer. Your healthcare team can explain what available information means for you.</p></div></section>
          <section class="diagnosis-card" id="diagnosis-questions"><img src="assets/images/treatment-consultation.png" alt="A patient asking a doctor questions about a cancer diagnosis"><div><h2>Questions to Ask About Your Diagnosis</h2><p>Prepare questions that can help you understand your diagnosis, test results, stage and what happens next.</p></div></section>
          <section class="diagnosis-card diagnosis-research-card" id="diagnosis-research"><div><h2>Diagnosis Research</h2><p>Research continues to improve cancer tests, imaging, staging methods and ways to detect cancer earlier.</p></div></section>
        </div>
      </article>
    </section>
    <a class="back-to-top" href="#" aria-label="Back to top">Back to<br>top</a>`;
}
