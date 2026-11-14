// Dedicated procedure landing pages — each targets a high-intent local keyword.
// group:    organises the Navbar dropdown into sections.
// featured: true = shown in Footer; false = accessible via nav dropdown & specialty pages.
// relatedArticles: linked at the bottom of each procedure page.

export const PROCEDURES = [

  // ── JOINT REPLACEMENT ────────────────────────────────────────────────────

  {
    slug: 'knee-replacement',
    reviewed: '2026-11-14',
    sources: [
      { label: 'Robotic-assisted vs conventional total knee arthroplasty: meta-analysis of 9 randomised trials (J Robot Surg 2024) — OrthoEvidence summary', url: 'https://myorthoevidence.com/AceReport/Show/robotic-assisted-versus-conventional-total-knee-arthroplasty-for-surgical-precision', publisher: 'OrthoEvidence' },
      { label: 'More than 80% of total knee replacements can last for 25 years', url: 'https://evidence.nihr.ac.uk/alert/more-than-80-of-total-knee-replacements-can-last-for-25-years/', publisher: 'NIHR' },
    ],
    name: 'Robotic Knee Replacement',
    group: 'Joint Replacement',
    featured: true,
    keywordTitle: 'Robotic Knee Replacement Surgeon in Thane',
    metaDescription:
      'Robotic-assisted total and partial knee replacement in Thane West with Dr. Niranjan Ghag: who needs it, recovery, cost and insurance. English, मराठी, हिंदी.',
    image: '/images/joint-replacement.jpg',
    hero: 'Knee replacement planned and guided with robotic assistance, offered only when non-surgical treatment is no longer enough.',
    specialty: 'joint-replacement',
    relatedArticles: [
      { slug: 'early-signs-knee-arthritis', title: 'Early signs of knee arthritis' },
      { slug: 'robotic-knee-replacement-recovery', title: 'Robotic knee replacement recovery' },
      { slug: 'robotic-knee-replacement-cost-thane', title: 'Robotic knee replacement cost in Thane & Mumbai' },
      { slug: 'knee-arthritis-treatment-without-surgery', title: 'Knee arthritis treatment without surgery' },
    ],
    sections: [
      {
        heading: 'When is knee replacement the right choice?',
        body: 'Knee replacement is considered when arthritis pain persists despite medication, physiotherapy and injections — not before. The strongest indicators:',
        bullets: [
          'Pain that limits walking distance, stairs or daily activities',
          'Night pain that disturbs sleep despite medication',
          'Visible deformity (bow legs or knock knees) that is progressing',
          'X-ray showing advanced (grade 3–4) arthritis with bone-on-bone contact',
        ],
      },
      {
        heading: 'Why robotic-assisted?',
        body: 'A 3D plan of your knee is created before surgery. During the operation, the robotic arm keeps every bone cut exactly on plan — alignment accurate to fractions of a millimetre, healthy bone and ligaments preserved. A 2024 review of nine randomised trials found more accurate alignment and fewer alignment outliers with robotic assistance, and slightly better patient-reported scores; it also found longer operating time, and the long-term benefit and cost-effectiveness are not yet proven. The surgeon operates; the robot helps hold the plan, and surgeon experience still matters most.',
      },
      {
        heading: 'Your recovery, step by step',
        bullets: [
          'Day 0–1: most people stand and walk with a walker, with physiotherapy support',
          'Day 2–4: staircase training; most people go home within a few days, depending on health',
          'Week 2–3: walking indoors without support; sutures reviewed',
          'Week 6: most daily activities, desk work, short outings',
          'Month 3 onward: most people are much more comfortable; some ache and swelling can last several months',
        ],
      },
      {
        heading: 'What determines the cost?',
        body: 'Total cost varies with the implant choice, robotic technology use, room category and insurance coverage. Most major insurers and cashless schemes cover knee replacement. Bring your policy details to the consultation — you will get a clear written estimate before any decision, with no obligation.',
      },
    ],
    faqs: [
      { q: 'Am I too old (or too young) for knee replacement?', a: 'Age alone is not the deciding factor. Patients from their 50s to late 80s undergo successful replacement; what matters is fitness for anaesthesia, the severity of arthritis, and how much pain limits your life. Registry data show about 93% of total knee replacements still in place at 15 years and about 82% at 25 years, which is relevant when younger patients with severe disease are deciding.' },
      { q: 'How painful is the surgery and recovery?', a: 'With modern multimodal pain management — nerve blocks, local infiltration and scheduled medication — most patients describe the pain as far less than they feared, and most are up and walking with support within a day or so. Some ache and swelling for a few months is common.' },
      { q: 'Can both knees be replaced together?', a: 'Yes, for medically fit patients, both knees can be done in one anaesthesia (bilateral TKR) — one hospital stay and one recovery period. Your cardiac and general fitness are assessed first.' },
      { q: 'How soon can I sit cross-legged or use Indian toilets?', a: 'High-flexion implant designs and robotic alignment allow many patients to regain deep bending. This depends on your pre-operative flexibility and is discussed honestly during planning.' },
      { q: 'What is the cost of robotic knee replacement in Thane/Mumbai?', a: 'Cost depends on implant brand, whether one or both knees are done, robotic system used, hospital tier and room category — there is no single fixed price. A detailed, written estimate is given after your consultation. See our full cost guide for indicative ranges and what drives them.' },
      { q: 'Is knee replacement covered by insurance/Mediclaim?', a: 'Most health insurance and Mediclaim policies in India cover knee replacement, including cashless treatment at network hospitals, subject to your policy terms and any waiting period for joint conditions. Bring your policy details to the consultation for a clear answer specific to your plan.' },
      { q: 'Is robotic knee replacement better than traditional, and is it worth the extra cost?', a: 'Robotic assistance improves implant alignment accuracy in trials, but long-term benefit is not yet proven and it is one factor among several — surgeon experience matters most either way. See our honest robotic vs. traditional comparison for a side-by-side look, including who it does and doesn\'t suit.' },
    ],
    footerNote: 'Not sure knee replacement is right for you? Sports injuries and early cartilage damage can often be treated with <a href="/specialties/sports-arthroscopy">keyhole arthroscopy</a> instead. Read about <a href="/education/robotic-knee-replacement-cost-thane">robotic knee replacement cost in Thane</a> or see <a href="/contact">locations and OPD hours</a>.',
  },

  {
    slug: 'hip-replacement',
    reviewed: '2026-11-14',
    sources: [
      { label: 'Global study finds high success rate for hip and knee replacements (The Lancet, 2019)', url: 'https://www.bristol.ac.uk/news/2019/february/hip-knee-replacements.html', publisher: 'University of Bristol' },
    ],
    name: 'Total Hip Replacement',
    group: 'Joint Replacement',
    featured: true,
    keywordTitle: 'Hip Replacement Surgeon in Thane',
    metaDescription:
      'Total hip replacement in Thane West with Dr. Niranjan Ghag: signs you may need it, what the operation involves, recovery, implant lifespan and insurance.',
    image: '/images/joint-replacement.jpg',
    hero: 'For hip arthritis or AVN that still limits walking and sleep after non-surgical treatment.',
    specialty: 'joint-replacement',
    relatedArticles: [
      { slug: 'hip-replacement-signs', title: 'Signs you may need hip replacement' },
      { slug: 'joint-replacement-insurance-india', title: 'Is joint replacement covered by insurance?' },
    ],
    sections: [
      {
        heading: 'Do you actually need a hip replacement?',
        body: 'Hip arthritis is a master of disguise — it often presents as groin strain, thigh pain or even knee pain. Surgery is considered when:',
        bullets: [
          'Groin or thigh pain limits walking and disturbs sleep',
          'Stiffness makes wearing socks, cutting toenails or sitting cross-legged difficult',
          'X-ray confirms advanced arthritis or avascular necrosis (AVN)',
          'Medication and physiotherapy no longer control the pain',
        ],
      },
      {
        heading: 'What modern hip replacement looks like',
        body: 'The worn ball-and-socket joint is replaced with smooth, durable implants through a tissue-sparing approach. Most people stand and walk with support within a day or so, manage stairs within about a week, and are independent for daily life by about 4–6 weeks, though this varies with age and health. Registry analyses found about 89% of total hip replacements still in place at 15 years, and modern ceramic and highly cross-linked polyethylene bearings are chosen partly to extend that — which is why hip replacement is also offered to younger patients with advanced AVN.',
      },
      {
        heading: 'Why timing matters',
        body: 'Waiting too long weakens hip muscles, shortens the limb, and worsens bone quality — making surgery technically harder and rehabilitation slower. If pain has changed how you walk or what you can do, an evaluation with a standing X-ray gives you clear answers; surgery remains your decision.',
      },
    ],
    faqs: [
      { q: 'How long will the implant last?', a: 'A 2019 analysis of national joint registries in The Lancet found about 89% of total hip replacements still in place at 15 years and about 58% at 25 years. Newer bearing surfaces are expected to do at least as well, but long-term data on them are still being collected.' },
      { q: 'What is AVN and why do younger patients need hip replacement?', a: 'Avascular necrosis is loss of blood supply to the femoral head, common in 30s–40s, often after steroid use or alcohol excess. Early stages can be treated with preservation procedures; advanced collapse usually needs replacement.' },
      { q: 'Will I be able to sit on the floor afterwards?', a: 'With modern implants and surgical techniques, many patients regain floor-sitting. It depends on implant type and your anatomy — this is discussed honestly before surgery.' },
      { q: 'How soon can I return to work?', a: 'Desk work: typically 3–4 weeks. Standing or field work: 6–10 weeks depending on demands. Driving usually resumes around 4–6 weeks.' },
      { q: 'What is the cost of hip replacement in India?', a: 'Cost varies with implant material (metal, ceramic or highly cross-linked polyethylene), single vs. bilateral surgery, hospital tier and room category — government and private hospital pricing also differs significantly. You will get a clear, written estimate before deciding anything.' },
      { q: 'Is hip replacement covered by Mediclaim/health insurance?', a: 'Yes, in most cases — hip replacement is a standard inclusion in Indian health insurance policies, often available cashless at network hospitals. Pre-existing-condition waiting periods can apply, so it is worth checking your specific policy. See our insurance guide for the documents and process typically involved.' },
    ],
  },

  {
    slug: 'robotic-vs-traditional-knee-replacement',
    reviewed: '2026-11-14',
    sources: [
      { label: 'Robotic-assisted vs conventional total knee arthroplasty: meta-analysis of 9 randomised trials (J Robot Surg 2024) — OrthoEvidence summary', url: 'https://myorthoevidence.com/AceReport/Show/robotic-assisted-versus-conventional-total-knee-arthroplasty-for-surgical-precision', publisher: 'OrthoEvidence' },
      { label: 'More than 80% of total knee replacements can last for 25 years', url: 'https://evidence.nihr.ac.uk/alert/more-than-80-of-total-knee-replacements-can-last-for-25-years/', publisher: 'NIHR' },
    ],
    name: 'Robotic vs. Traditional Knee Replacement',
    group: 'Joint Replacement',
    featured: false,
    keywordTitle: 'Robotic vs Traditional Knee Replacement | Thane',
    metaDescription:
      'Robotic vs traditional knee replacement compared honestly — accuracy, recovery, cost, and who robotic surgery does and does not suit. Khopat, Thane West.',
    image: '/images/joint-replacement.jpg',
    hero: 'An honest, side-by-side comparison — not a sales pitch for either option.',
    specialty: 'joint-replacement',
    relatedArticles: [
      { slug: 'robotic-knee-replacement-cost-thane', title: 'Robotic knee replacement cost in Thane & Mumbai' },
      { slug: 'knee-arthritis-treatment-without-surgery', title: 'Knee arthritis treatment without surgery' },
    ],
    sections: [
      {
        heading: 'Side by side',
        bullets: [
          'Alignment accuracy: Robotic — accurate to fractions of a millimetre against a pre-built 3D plan. Traditional — relies on the surgeon\'s manual instrumentation and experience, which is excellent in skilled hands but has more natural variability',
          'Soft-tissue handling: Robotic — the arm stops the saw outside the planned boundary, which is intended to protect ligaments. Traditional — relies on cutting guides and the surgeon\'s control',
          'Recovery speed: Robotic — some trials report slightly better early patient-reported scores; differences are small. Traditional — recovery is good, and for many patients indistinguishable after the first months',
          'Cost: Robotic — approximately ₹2.5–3 lakh per knee, due to the technology usage fee. Traditional — approximately ₹1.5–2 lakh per knee depending on the implant chosen, and a well-established, time-tested option. We quote both honestly so you can weigh the difference against your own priorities',
          'Long-term outcome: Long-term data exist for conventional surgery (about 93% of total knees in place at 15 years in registries); robotic long-term benefit is not yet proven. The surgeon\'s experience matters more than the tool',
        ],
      },
      {
        heading: 'Image-based vs. imageless robotic systems',
        body: 'Robotic knee replacement itself comes in two main forms, and the choice affects both planning and cost. Image-based systems use a CT scan taken before surgery to build a precise 3D plan, which adds the cost of that scan. Imageless systems map your knee in real time during the operation using surface and motion tracking, skipping the pre-op CT scan and its cost while still achieving robotic-level alignment accuracy for the great majority of knees. We recommend whichever genuinely suits your case — not the one that costs more.',
      },
      {
        heading: 'Disadvantages of robotic knee replacement — the honest version',
        bullets: [
          'Higher cost than conventional surgery',
          'Slightly longer operative time in some cases, due to the additional planning and registration steps',
          'Requires specific equipment and surgeon training — not available everywhere',
          'For straightforward, well-aligned knees in experienced hands, the outcome difference versus traditional surgery can be modest',
        ],
      },
      {
        heading: 'Who is not a good candidate for robotic knee replacement?',
        body: 'Robotic assistance is not strictly necessary for every patient. Some prior knee implants, certain hardware from old fractures, or specific anatomical factors can make a conventional approach more practical in a minority of cases. This is assessed individually — it is not a reason to avoid evaluation, simply a factor in planning the right approach for your knee.',
      },
      {
        heading: 'Our honest recommendation',
        body: 'Robotic-assisted surgery is our preferred approach for most knee replacements because of the alignment precision it offers, but it is a tool, not a guarantee — surgical experience and post-operative rehabilitation remain the biggest drivers of outcome either way. We discuss both options plainly for your specific knee rather than defaulting to whichever is most profitable to offer.',
      },
    ],
    faqs: [
      { q: 'Is robotic knee replacement actually better than traditional?', a: 'Randomised trials show more consistent alignment with robotic assistance and small differences in early patient-reported scores, but no proven long-term advantage yet. Both approaches work well in experienced hands, and "better" depends partly on your specific knee.' },
      { q: 'Is the extra cost of robotic surgery worth it?', a: 'Robotic is approximately ₹2.5–3 lakh and traditional approximately ₹1.5–2 lakh per knee, so the gap is real. For complex deformities or revision cases, the added precision can be genuinely valuable. For straightforward knees, traditional surgery often gives an equally good outcome for less — we will tell you plainly which applies to your knee rather than recommending more than you need.' },
      { q: 'Can I reduce the cost without compromising the outcome?', a: 'Often, yes — choosing an imageless robotic system (no separate CT scan charge) or a well-established domestic implant brand can meaningfully lower the bill without affecting how well the surgery goes. We discuss these trade-offs openly at consultation.' },
      { q: 'Can every patient choose robotic surgery?', a: 'Almost all patients are candidates, but a small number with specific prior hardware or anatomical factors may be better suited to a conventional approach — assessed individually at consultation.' },
    ],
  },

  {
    slug: 'knee-pain',
    name: 'Knee Pain Treatment',
    group: 'Joint Replacement',
    featured: false,
    keywordTitle: 'Knee Pain Doctor in Thane — गुडघेदुखी',
    metaDescription:
      'Knee pain specialist in Thane treating ghutne dard (गुडघेदुखी): arthritis, meniscus and ligament injuries. X-ray on the day. Khopat, Thane West.',
    image: '/images/joint-replacement.jpg',
    hero: 'Ghutne dard (गुडघेदुखी) — knee pain — has many causes. The right treatment starts with the right diagnosis.',
    specialty: 'joint-replacement',
    relatedArticles: [
      { slug: 'early-signs-knee-arthritis', title: 'Early signs of knee arthritis' },
      { slug: 'robotic-knee-replacement-recovery', title: 'When knee replacement is the answer' },
    ],
    sections: [
      {
        heading: 'What is causing your ghutne dard (knee pain)?',
        body: 'Ghutne dard (गुडघेदुखी / घुटने का दर्द) is among the most common reasons patients visit an orthopaedic surgeon. Common diagnoses include:',
        bullets: [
          'Osteoarthritis — cartilage wears away over time; most common in adults over 45',
          'Meniscus tear — the shock-absorbing cartilage; common from twisting movements',
          'Ligament injury — ACL, PCL or MCL sprain or rupture from sudden impact',
          'Patellofemoral pain — around the kneecap; common in younger patients and runners',
          'Tendinitis — patellar or quadriceps tendon inflammation from overuse',
          'Bursitis — swelling of the fluid sacs around the knee after a fall or prolonged kneeling',
        ],
      },
      {
        heading: 'How we diagnose your knee pain',
        body: 'A standing X-ray (weight-bearing) is essential — it shows the actual gap between bones and grades arthritis accurately. MRI is added when soft-tissue injury is suspected. You leave the consultation knowing exactly what is happening and what the options are.',
      },
      {
        heading: 'Treatment options — from least to most invasive',
        bullets: [
          'Physiotherapy and exercise — the foundation for most knee problems; often underused',
          'Medications — anti-inflammatories, supplements; realistic expectations set upfront',
          'Injections — corticosteroid for inflammation; hyaluronic acid or PRP only occasionally, for pain relief only',
          'Arthroscopy — keyhole surgery to clean, repair or reconstruct inside the knee',
          'Knee replacement — only when arthritis is advanced and all other treatments have failed',
        ],
      },
    ],
    faqs: [
      { q: 'My knee clicks and grinds — is that serious?', a: 'Clicking and crepitus (grinding) are common and usually harmless if there is no pain, swelling or locking. Clicking with pain or swelling needs investigation.' },
      { q: 'Can exercise make knee arthritis worse?', a: 'The right exercise actually protects the knee — it strengthens the muscles that take load off the joint. Walking, cycling and swimming are well tolerated and encouraged.' },
      { q: 'Are knee injections effective?', a: 'Corticosteroid injections provide significant short-term relief (4–12 weeks) for inflamed arthritic knees. Hyaluronic acid has more modest evidence, and PRP is not recommended for knee arthritis in major guidelines; both are used only occasionally, for pain relief only, in selected patients.' },
      { q: 'When should I see a doctor for knee pain?', a: 'Immediately: if the knee is severely swollen, very hot, or locked. Soon: if pain limits your walking, work, or sleep for more than 2–3 weeks despite rest.' },
    ],
  },

  {
    slug: 'joint-pain',
    name: 'Joint Pain Treatment',
    group: 'Joint Replacement',
    featured: true,
    keywordTitle: 'Joint Pain Treatment in Thane — सांधेदुखी',
    metaDescription:
      'Joint pain treatment in Thane for sandhe dukhi (सांधेदुखी) and jodo ka dard: knee, hip, shoulder and ankle pain. Khopat, Thane West.',
    image: '/images/joint-replacement.jpg',
    hero: 'Sandhe dukhi (सांधेदुखी) — joint pain — is not something you should just live with. Most causes have effective treatments.',
    specialty: 'joint-replacement',
    relatedArticles: [
      { slug: 'early-signs-knee-arthritis', title: 'Early signs of knee arthritis' },
      { slug: 'hip-replacement-signs', title: 'Signs you may need hip replacement' },
    ],
    sections: [
      {
        heading: 'Sandhe dukhi — what is causing your joint pain?',
        body: 'Joint pain (sandhe dukhi / सांधेदुखी / जोड़ों का दर्द / gude dukhne) can affect any joint. The cause determines the treatment entirely:',
        bullets: [
          'Osteoarthritis (ghasa ghasi / घसाघसी) — cartilage worn with age; most common in knees, hips and fingers',
          'Rheumatoid arthritis — immune system attacking joints; morning stiffness, multiple joints',
          'Gout (vaat / वात) — uric acid crystals in the joint; sudden severe pain often in big toe or ankle',
          'Post-injury arthritis — a joint injured years ago now developing arthritis',
          'Avascular necrosis (AVN) — bone dies due to lost blood supply; common in the hip',
          'Ligament or cartilage tears — from sports or accidents',
        ],
      },
      {
        heading: 'When to see an orthopaedic surgeon',
        body: 'Come in when:',
        bullets: [
          'Pain has lasted more than 3–4 weeks and is not improving',
          'The joint is swollen, warm or red',
          'Pain is disturbing your sleep',
          'You are limping or avoiding activities because of the joint',
          'Pain medication is giving less and less relief',
        ],
      },
      {
        heading: 'Treatment — what you can expect',
        body: 'Most joint pain is treated without surgery. A clear diagnosis comes first — standing X-ray, blood tests if inflammatory arthritis is suspected, MRI if a soft-tissue cause is likely. Treatment follows a stepwise approach: exercises and physiotherapy, appropriate medication, targeted injections, and surgery only when conservative treatment has genuinely failed.',
      },
    ],
    faqs: [
      { q: 'Sandhe dukhi — should I take calcium and vitamin D?', a: 'Calcium and vitamin D support bone density but do not treat joint pain from arthritis or cartilage damage. They are useful supplements but not a substitute for diagnosis and specific treatment.' },
      { q: 'Is sandhe dukhi (joint pain) curable?', a: 'It depends on the cause. Gout and inflammatory arthritis can be well controlled with medication. Osteoarthritis cannot be reversed, but pain is manageable and joint replacement reliably relieves it when advanced.' },
      { q: 'Can joint pain be treated without surgery?', a: 'Yes, in most cases — physiotherapy, weight management, targeted injections and appropriate medication control pain for years. Surgery is reserved for advanced disease where these measures no longer work.' },
      { q: 'Which joint pain requires urgent attention?', a: 'A hot, red, very swollen joint with fever could indicate a joint infection (septic arthritis) — this is an emergency that needs same-day evaluation.' },
    ],
  },

  // ── TRAUMA & FRACTURE ────────────────────────────────────────────────────

  {
    slug: 'trauma-surgery',
    name: 'Advanced Trauma & Fracture Surgery',
    group: 'Trauma & Fracture',
    featured: true,
    keywordTitle: 'Trauma & Fracture Surgeon in Thane',
    metaDescription:
      'Trauma and fracture surgery in Thane — complex and intra-articular fractures, road accident injuries and polytrauma. Khopat, Thane West.',
    image: '/images/trauma-fracture.jpg',
    hero: 'When bones break, precision matters — expert fixation to restore strength, alignment and function.',
    specialty: 'trauma-fracture',
    relatedArticles: [
      { slug: 'fracture-healing-surgery', title: 'How fractures heal — and when surgery is needed' },
    ],
    sections: [
      {
        heading: 'Fractures we treat — every bone, every age',
        body: 'Our orthopaedic trauma service covers the full spectrum of fractures across the body:',
        bullets: [
          'Upper limb: clavicle (collar bone), humerus (upper arm), forearm (radius & ulna), wrist, hand & finger fractures',
          'Lower limb: femur (thigh bone), tibia & fibula (leg), ankle (bimalleolar, trimalleolar), foot & toe fractures',
          'Pelvis & acetabulum: complex pelvic fractures from high-energy trauma',
          'Spine fractures: vertebral compression fractures, burst fractures (see Spine Surgery page)',
          'Road accident injuries — single or multiple bones; assessed and managed as a whole',
          'Open (compound) fractures — bone piercing skin; emergency surgery within hours',
          'Fracture non-union — bones that have failed to heal after prior treatment',
          'Mal-union correction — re-aligning a bone that healed in the wrong position',
        ],
      },
      {
        heading: 'Surgical techniques used',
        bullets: [
          'Intramedullary nailing — a rod inside the bone canal; used for femur, tibia, humerus fractures',
          'Plate and screw fixation — for periarticular fractures, forearm, clavicle, ankle',
          'Minimally invasive percutaneous osteosynthesis (MIPO) — smaller incisions, faster healing',
          'External fixation — temporary stabilisation in open or contaminated fractures',
          'Bone grafting — for non-union and bone loss',
          'Locked plating — for osteoporotic and comminuted fractures',
        ],
      },
      {
        heading: 'Recovery and rehabilitation',
        body: 'Recovery depends on which bone is broken and how it is fixed. Most patients move (though not always weight-bear) within 24–48 hours of surgery. Physiotherapy starts early to prevent stiffness. Upper-limb fractures: desk work typically at 4–6 weeks. Lower-limb: weight-bearing resumes based on X-ray evidence of healing, usually 6–12 weeks.',
      },
    ],
    faqs: [
      { q: 'Does every fracture need surgery?', a: 'No. Many fractures heal in a cast or splint. Surgery is recommended when the fracture is displaced, unstable, near a joint, involves the forearm or ankle, or when a cast cannot maintain alignment — the final decision is made after viewing the X-ray.' },
      { q: 'My femur (thigh bone) was broken in a road accident — what happens?', a: 'Femur fractures in adults are almost always fixed surgically with an intramedullary nail — a titanium rod passed down the centre of the bone. Surgery is done within 24–48 hours when the patient is stable. Most patients sit up the next day and begin walking with support within a week.' },
      { q: 'What is a non-union fracture?', a: 'A fracture that has not healed after the expected time (usually 6 months) is called a non-union. Causes include poor blood supply, infection, inadequate fixation or smoking. Treatment involves bone grafting and new fixation — with good outcomes.' },
      { q: 'Will the implant (plate/nail) need to be removed later?', a: 'Modern implants are well tolerated and many patients keep them permanently. Removal is offered if the implant causes discomfort or at patient request, usually 12–18 months after confirmed healing.' },
    ],
  },

  {
    slug: 'fracture-treatment',
    name: 'Bone Fracture Treatment',
    group: 'Trauma & Fracture',
    featured: false,
    keywordTitle: 'Fracture Treatment in Thane — Haddi Tootna',
    metaDescription:
      'Fracture treatment in Thane for haddi tootna (हड्डी टूटना) — arm, leg, wrist, ankle and foot fractures. Khopat, Thane West.',
    image: '/images/trauma-fracture.jpg',
    hero: 'Haddi tootna (हाडी तुटणे) — whether simple or complex, every fracture deserves the right treatment from the start.',
    specialty: 'trauma-fracture',
    relatedArticles: [
      { slug: 'fracture-healing-surgery', title: 'How fractures heal — and when surgery is needed' },
    ],
    sections: [
      {
        heading: 'Fracture treatment — cast or surgery?',
        body: 'Most patients want to know: will I need an operation? The answer depends on the fracture pattern:',
        bullets: [
          'Cast treatment: undisplaced (not shifted) fractures of the wrist, foot, clavicle and ribs heal well without surgery',
          'Surgery needed: displaced fractures, fractures near joints, both-bone forearm fractures, most ankle fractures, all femur and tibia fractures in adults',
          'The deciding factor: will the bone heal in a correct position with a cast? If not, surgery is safer and gives a better result',
        ],
      },
      {
        heading: 'Common fractures by bone',
        bullets: [
          'Clavicle (collar bone) — very common; most heal in a sling; displaced mid-shaft and outer end fractures do better with a plate',
          'Humerus (upper arm) — proximal fractures (near shoulder) often treated in a sling; shaft and distal fractures usually need plating or nailing',
          'Radius & ulna (forearm) — displaced adult forearm fractures almost always need plate fixation',
          'Femur (thigh) — all adult femur fractures need a nail or plate; surgery within 24–48 hours',
          'Tibia & fibula (leg) — tibial shaft nailing; ankle fractures fixed with plates and screws',
          'Foot fractures — calcaneus (heel), metatarsal, toe fractures; many managed without surgery, displaced ones fixed',
        ],
      },
      {
        heading: 'Emergency fractures — what to do',
        bullets: [
          'Do not move the limb; support it in the position found',
          'Cover an open wound with a clean cloth; do not push bone back',
          'Go to the nearest accident and emergency — or call us directly',
          'Bring any previous X-rays and medical reports',
        ],
      },
    ],
    faqs: [
      { q: 'How long does a fracture take to heal?', a: 'Small bones (fingers, toes): 3–4 weeks. Forearm and wrist: 6–8 weeks. Tibia (leg): 10–16 weeks. Femur (thigh): 12–16 weeks. Healing time depends on age, bone quality, nutrition and whether the fracture was fixed surgically or in a cast.' },
      { q: 'My child fell and their arm is swollen but the X-ray looks normal — could it be broken?', a: 'Yes — children have growth plates at the ends of bones that look like "gaps" on X-ray and can be confused with fractures, or fractures in growth plates can be missed. If there is significant swelling and tenderness, treat as a fracture. A repeat X-ray in 7–10 days or an MRI clarifies the diagnosis.' },
      { q: 'Can I travel with a fracture?', a: 'Short distances are usually fine once the fracture is stabilised. Long flights with a lower-limb fracture carry a blood clot risk — discuss with your surgeon before travel.' },
    ],
  },

  {
    slug: 'hand-wrist-surgery',
    name: 'Hand & Wrist Surgery',
    group: 'Trauma & Fracture',
    featured: false,
    keywordTitle: 'Hand & Wrist Surgeon in Thane',
    metaDescription:
      'Hand and wrist problems in Thane West: wrist and finger fractures, tendon injuries, trigger finger, carpal tunnel and De Quervain\'s. When surgery helps.',
    image: '/images/trauma-fracture.jpg',
    hero: 'Most hand and wrist problems settle without an operation. Some injuries, such as cut tendons, need prompt repair.',
    specialty: 'trauma-fracture',
    reviewed: '2026-11-14',
    sources: [
      { label: 'Carpal tunnel syndrome', url: 'https://www.nhs.uk/conditions/carpal-tunnel-syndrome/', publisher: 'NHS' },
      { label: 'Trigger finger', url: 'https://www.orthoinfo.org/bodypart/hand-wrist/trigger-finger', publisher: 'AAOS OrthoInfo' },
      { label: 'De Quervain\'s tendinosis', url: 'https://www.orthoinfo.org/bodypart/hand-wrist/de-quervains-tendinosis', publisher: 'AAOS OrthoInfo' },
    ],
    relatedArticles: [
      { slug: 'carpal-tunnel-syndrome-hand-numbness-at-night', title: 'Hand numbness at night: carpal tunnel?' },
      { slug: 'trigger-finger-locking-finger-treatment', title: 'Trigger finger: causes and treatment' },
      { slug: 'wrist-thumb-pain-de-quervain-tenosynovitis', title: 'Thumb-side wrist pain (De Quervain\'s)' },
      { slug: 'ganglion-cyst-lump-on-wrist-do-i-need-surgery', title: 'Ganglion cyst on the wrist' },
      { slug: 'fracture-healing-surgery', title: 'How fractures heal — and when surgery is needed' },
    ],
    sections: [
      {
        heading: 'Which hand and wrist problems are treated?',
        body: 'The hand clinic sees two broad groups: injuries, where timing matters, and wear-and-overuse problems, which usually settle with simple treatment first.',
        bullets: [
          'Wrist fractures — distal radius (the commonest wrist fracture) and scaphoid fractures, which can be missed on the first X-ray',
          'Metacarpal and finger fractures — boxing fractures, crush and sports injuries',
          'Tendon injuries — cut flexor or extensor tendons, which need prompt repair',
          'Mallet finger — a drooping fingertip after the tendon is pulled off, usually treated in a splint',
          'Trigger finger — a finger that catches, clicks or locks in a bent position',
          'De Quervain\'s tenosynovitis — pain on the thumb side of the wrist with gripping',
          'Carpal tunnel syndrome — numbness and tingling in the thumb and first fingers, often at night',
          'Ganglion cysts — harmless fluid-filled lumps around the wrist or fingers',
        ],
      },
      {
        heading: 'Which hand injuries need to be seen urgently?',
        body: 'A cut on the palm or finger with loss of bending or straightening, a finger that is numb beyond a cut, a wrist that is deformed or very swollen after a fall, and pain in the anatomical snuffbox (the hollow at the base of the thumb) after a fall should all be seen the same day. Cut tendons and nerves are repaired best early, and scaphoid fractures can be missed on a first X-ray, so a suspected one is usually splinted and re-checked.',
      },
      {
        heading: 'Do trigger finger and De Quervain\'s need surgery?',
        body: 'Usually not. Both start with rest from the painful activity, a splint and simple painkillers. A steroid injection helps many people and can be repeated a limited number of times; it works less well in people with diabetes and in long-standing cases. Surgery — a short day-case release under local anaesthetic — is considered when symptoms are severe, a finger stays locked, or other treatment has not helped. Complications are uncommon but include infection, stiffness and the problem returning.',
      },
      {
        heading: 'When does carpal tunnel syndrome need an operation?',
        body: 'Night splints and, for selected people, a steroid injection help many cases. The NHS advises that surgery is considered when symptoms are getting worse, have not settled with other treatment, or the numbness is constant or the thumb muscle is wasting. The operation releases the tight ligament over the nerve, usually as a day procedure under local anaesthetic. Tingling often improves quickly, but grip strength and long-standing numbness can take months, and not every symptom always goes.',
      },
      {
        heading: 'How are wrist fractures treated?',
        body: 'Many wrist fractures that are not displaced heal in a cast in about six weeks. Surgery with a plate or wires is advised when the broken ends are displaced, unstable or involve the joint surface, because healing out of position can leave a stiff, weak or painful wrist. The choice also depends on your age, hand dominance and work. After a fracture in an older adult, it is worth checking bone strength, since a wrist fracture can be the first sign of osteoporosis.',
      },
    ],
    faqs: [
      { q: 'I have numbness in my fingers at night — what is it?', a: 'Night-time numbness in the thumb, index and middle fingers is typical of carpal tunnel syndrome. The diagnosis is usually made by examination; a nerve test is sometimes needed. Treatment ranges from a night splint to a small release operation.' },
      { q: 'My finger keeps getting stuck in a bent position — what is wrong?', a: 'This is usually trigger finger: a thickened tendon catches in its tunnel. A splint, rest and sometimes a steroid injection help many people; a day-case release is considered if it persists or the finger locks.' },
      { q: 'How soon should a cut tendon be repaired?', a: 'Cut tendons in the hand are best repaired early, so a cut with loss of finger movement needs same-day emergency assessment.' },
      { q: 'Does a ganglion need removing?', a: 'Usually not. More than half go away on their own. Removal is considered if it is painful or limits the hand; it can come back after draining and, less often, after surgery.' },
    ],
},

  // ── FOOT & ANKLE ─────────────────────────────────────────────────────────

  {
    slug: 'foot-ankle-surgery',
    name: 'Foot & Ankle Surgery',
    group: 'Foot & Ankle',
    featured: true,
    keywordTitle: 'Foot & Ankle Surgeon in Thane',
    metaDescription:
      'Foot and ankle care in Thane West: ankle fractures, Achilles rupture, flat foot, bunions, heel pain and diabetic foot. When surgery helps and when it does not.',
    image: '/images/foot-ankle.jpg',
    hero: 'Most foot and ankle problems improve without an operation. Surgery is for the ones that do not, or that cannot heal well without it.',
    specialty: 'foot-ankle',
    reviewed: '2026-11-14',
    sources: [
      { label: 'Achilles tendon rupture — patient information', url: 'https://www.orthoinfo.org/diseases--conditions/achilles-tendon-rupture-tear', publisher: 'AAOS OrthoInfo' },
      { label: 'Bunions — patient information', url: 'https://www.orthoinfo.org/en/diseases--conditions/bunions/', publisher: 'AAOS OrthoInfo' },
      { label: 'Posterior tibial tendon dysfunction (adult flat foot)', url: 'https://www.orthoinfo.org/diseases--conditions/posterior-tibial-tendon-dysfunction/', publisher: 'AAOS OrthoInfo' },
      { label: 'Diabetes and your feet', url: 'https://www.cdc.gov/diabetes/diabetes-complications/diabetes-and-your-feet.html', publisher: 'CDC' },
    ],
    relatedArticles: [
      { slug: 'heel-pain-plantar-fasciitis', title: 'Heel pain — causes and treatment' },
      { slug: 'ankle-sprain-vs-fracture', title: 'Ankle sprain vs fracture — how to tell the difference' },
      { slug: 'achilles-tendon-rupture-surgery-or-not', title: 'Achilles rupture: do you need surgery?' },
      { slug: 'bunion-surgery-do-i-need-it', title: 'Do I need bunion surgery?' },
      { slug: 'flat-feet-in-adults-inner-ankle-pain-do-i-need-surgery', title: 'Flat feet in adults' },
      { slug: 'diabetic-foot-sore-not-healing-how-worried-should-i-be', title: 'Diabetic foot sore not healing' },
    ],
    sections: [
      {
        heading: 'Which foot and ankle conditions are treated?',
        bullets: [
          'Ankle fractures — from simple undisplaced breaks to unstable fractures that need fixation',
          'Ankle instability — repeated giving-way after sprains',
          'Achilles tendon rupture and Achilles tendon pain',
          'Adult flat foot — especially painful, collapsing flat foot with inner-ankle pain',
          'Bunions (hallux valgus) and toe deformities',
          'Heel pain and plantar fasciitis',
          'Ankle arthritis',
          'Diabetic foot problems — sores that do not heal, infection and Charcot foot',
        ],
      },
      {
        heading: 'Does every ankle fracture need surgery?',
        body: 'No. Stable, undisplaced fractures often heal in a cast or boot. Surgery is advised when the ankle joint is displaced or unstable, because a joint that heals out of position can become painful and arthritic. The decision rests on the X-ray pattern, whether the ankle is stable, and your health — diabetes, smoking and poor circulation raise the risk of wound problems after surgery and are weighed carefully.',
      },
      {
        heading: 'Does a ruptured Achilles tendon need an operation?',
        body: 'Not always. Good-quality trials show that a structured non-surgical programme in a boot gives functional results similar to surgery at one year for most adults. Surgery lowers the chance of the tendon re-rupturing but adds wound and nerve risks. The choice depends on your activity level, health and how soon you are seen, so a suspected rupture should be assessed within days.',
      },
      {
        heading: 'When are bunion or flat-foot operations worth considering?',
        body: 'Only for pain and difficulty walking that persist after good non-surgical care — wider shoes, padding, insoles and a fair trial of time. Neither operation is done to change how a painless foot looks. Recovery is long: weeks of protected weight-bearing and, for flat-foot reconstruction, often around three months in a cast and six months or more before pain improves substantially.',
      },
      {
        heading: 'Why does a diabetic foot sore need early attention?',
        body: 'Diabetes can reduce feeling and blood supply in the feet, so a small sore may not hurt and may heal slowly. A sore that is not clearly improving within a few days needs examination, and spreading redness, swelling, pus, fever, dark skin or a cold foot need same-day care. Daily foot checks and well-fitting footwear prevent many problems.',
      },
    ],
    faqs: [
      { q: 'My ankle still hurts months after a sprain — is that normal?', a: 'A simple sprain usually feels much better within about 4–6 weeks. Pain or giving-way beyond that can mean a missed fracture, ligament instability, a tendon injury or cartilage damage, and is worth an examination; imaging is chosen based on what the examination shows.' },
      { q: 'What is the recovery after ankle fracture surgery?', a: 'It varies with the fracture. Many people keep weight off the ankle for some weeks, then build up with physiotherapy; getting back to normal walking commonly takes a few months.' },
      { q: 'Can an Achilles rupture heal without surgery?', a: 'Yes, for most adults, with a structured boot programme. Surgery lowers the re-rupture risk but adds wound and nerve risks.' },
      { q: 'My child has flat feet — does it need treatment?', a: 'Flexible, painless flat feet are common in children and usually need no treatment. A flat foot that is painful or stiff should be assessed.' },
    ],
},

  {
    slug: 'heel-pain',
    name: 'Heel Pain & Plantar Fasciitis Treatment',
    group: 'Foot & Ankle',
    featured: false,
    keywordTitle: 'Heel Pain & Plantar Fasciitis in Thane — टाच दुखणे',
    metaDescription:
      'Heel pain and plantar fasciitis in Thane — tacchi dard (टाच दुखणे), heel spur and Achilles pain. Non-surgical treatment first. Khopat, Thane West.',
    image: '/images/foot-ankle.jpg',
    hero: 'That sharp pain in your heel with the first steps of the morning — treatable in most cases without surgery.',
    specialty: 'foot-ankle',
    relatedArticles: [
      { slug: 'heel-pain-plantar-fasciitis', title: 'Complete guide to heel pain and plantar fasciitis' },
    ],
    sections: [
      {
        heading: 'What is causing your tacchi dard (heel pain)?',
        body: 'Tacchi dard (टाच दुखणे / heel pain) is one of the most common orthopaedic complaints. The most frequent cause is plantar fasciitis, but others include:',
        bullets: [
          'Plantar fasciitis — inflammation of the thick band from heel to toes; sharp pain with first morning steps',
          'Heel spur (calcaneal spur) — a bony growth on the underside of the heel bone; often coexists with plantar fasciitis',
          'Achilles tendinitis — pain at the back of the heel; common in runners and people who are on their feet all day',
          'Fat pad atrophy — cushioning fat under the heel thins with age; common in older patients',
          'Stress fracture of the calcaneus — uncommon but important to exclude in athletes and after long runs',
        ],
      },
      {
        heading: 'Treatment — most cases resolve without surgery',
        bullets: [
          'Stretching — calf and plantar fascia stretches; the cornerstone of treatment when done consistently',
          'Supportive footwear and insoles — heel cups, arch support; avoid walking barefoot on hard floors',
          'Night splint — keeps the plantar fascia stretched while sleeping',
          'Corticosteroid injection — short-term pain relief for persistent cases, used sparingly because it can weaken the heel band',
          'Shockwave therapy — for pain relief in chronic cases not responding after 3–6 months; research results are mixed',
          'Surgery — plantar fascia release; considered only after about 12 months of good non-surgical care',
        ],
      },
    ],
    faqs: [
      { q: 'How long does plantar fasciitis take to heal?', a: 'More than 9 in 10 people improve within about 10 months with simple measures such as stretching and supportive footwear (American Academy of Orthopaedic Surgeons), and many feel better sooner. An injection may ease pain for a while but is used sparingly. Surgery is considered only if there is no improvement after about 12 months of good non-surgical care.' },
      { q: 'Does a heel spur always need surgery?', a: 'Almost never. The spur itself is rarely the source of pain — the plantar fascia inflammation is. Treating the inflammation resolves the pain without touching the spur.' },
      { q: 'My heel pain is worst in the morning — why?', a: 'The plantar fascia tightens during sleep. The first steps suddenly stretch it, causing pain. This "first-step pain" that eases after a few minutes is the classic presentation of plantar fasciitis.' },
    ],
  },

  // ── SPORTS MEDICINE ──────────────────────────────────────────────────────

  {
    slug: 'acl-reconstruction',
    reviewed: '2026-11-14',
    name: 'ACL Reconstruction',
    group: 'Sports Medicine',
    featured: true,
    keywordTitle: 'ACL Reconstruction Surgeon in Thane',
    metaDescription:
      'ACL tear in Thane West: who needs reconstruction, how keyhole ACL surgery works, graft choice and an honest, criteria-based return-to-sport timeline.',
    image: '/images/sports-arthroscopy.jpg',
    hero: 'Keyhole ligament reconstruction with a criteria-based path back to the sport you love.',
    specialty: 'sports-arthroscopy',
    relatedArticles: [
      { slug: 'acl-tear-symptoms-treatment', title: 'ACL tear — symptoms and treatment' },
      { slug: 'acl-surgery-recovery-timeline', title: 'ACL surgery recovery, week by week' },
    ],
    sections: [
      {
        heading: 'Do all ACL tears need surgery?',
        body: 'No — and a surgeon who says otherwise is not being straight with you. The decision depends on your knee and your life:',
        bullets: [
          'Physiotherapy alone can work for low-demand patients with stable knees',
          'Reconstruction is recommended for athletes, active patients, and anyone whose knee gives way repeatedly',
          'Delaying surgery in an unstable knee risks meniscus and cartilage damage — the real long-term cost',
        ],
      },
      {
        heading: 'How the surgery works',
        body: 'ACL reconstruction is done arthroscopically — through keyhole incisions with a camera. The torn ligament is replaced with a graft (commonly hamstring or peroneus tendon; graft choice is matched to your sport and anatomy). Meniscus tears found during surgery are repaired in the same sitting. Most patients walk the same or next day and go home within 24 hours.',
      },
      {
        heading: 'Return to sport: the honest timeline',
        bullets: [
          'Week 0–2: walking with support, gentle range-of-motion exercises',
          'Week 2–6: full weight-bearing, stationary cycling, strengthening',
          'Month 3: straight-line jogging',
          'Month 6: sport-specific drills after strength testing',
          'Month 8–12: full competitive return once hop and strength tests pass — rushing this is the main cause of re-tears',
        ],
      },
    ],
    faqs: [
      { q: 'What happens if I just leave my ACL tear?', a: 'Some knees cope; many give way during twisting movements. Each giving-way episode risks tearing the meniscus and damaging cartilage, accelerating arthritis. If your knee feels unstable, early assessment protects its future.' },
      { q: 'Which graft should I choose?', a: 'No single graft suits everyone — hamstring, patellar tendon and quadriceps grafts each have trade-offs in strength, harvest pain and re-rupture rates. The choice is matched to your sport, age and anatomy.' },
      { q: 'How long is the hospital stay?', a: 'ACL reconstruction is typically a day-care or one-night procedure. You walk with support before discharge and start physiotherapy immediately.' },
      { q: 'Will my knee be as good as before?', a: 'With a well-done reconstruction and completed rehabilitation, most athletes return to their previous level. Compliance with the full physiotherapy protocol is the biggest factor — more than the surgery itself.' },
      { q: 'ACL repair or ACL reconstruction — what is the difference?', a: 'Repair stitches the torn ligament back together and is only suitable for select, very fresh tears with good tissue quality. Reconstruction replaces the ligament with a graft and is the standard, more reliable option for most ACL tears, especially in athletes. Which one applies to you is assessed on MRI and at arthroscopy.' },
    ],
  },

  {
    slug: 'sports-injuries',
    name: 'Sports Injuries Treatment',
    group: 'Sports Medicine',
    featured: false,
    keywordTitle: 'Sports Injury & Sports Medicine in Thane',
    metaDescription:
      'Sports injury specialist in Thane — ACL tears, meniscus injuries, shoulder dislocation and ankle sprains. खेळातील दुखापत. Khopat, Thane West.',
    image: '/images/sports-arthroscopy.jpg',
    hero: 'From cricket to kabaddi, football to the gym — sports injuries deserve specialist care to get you back fully.',
    specialty: 'sports-arthroscopy',
    relatedArticles: [
      { slug: 'acl-tear-symptoms-treatment', title: 'ACL tear — symptoms and treatment' },
      { slug: 'ankle-sprain-vs-fracture', title: 'Ankle sprain vs fracture' },
    ],
    sections: [
      {
        heading: 'Common sports injuries we treat',
        bullets: [
          'Knee: ACL tear, PCL tear, meniscus tear, patellar dislocation, MCL sprain',
          'Shoulder: dislocation, rotator cuff tear, SLAP labral tear, AC joint injury',
          'Ankle: sprains (ligament tear), peroneal tendon injury, osteochondral lesion',
          'Muscle injuries: hamstring tear, quadriceps tear, calf muscle strain',
          'Bone stress: stress fractures in runners, cricketers and long-distance walkers',
          'Overuse: patellar tendinitis (jumper\'s knee), shin splints, tennis/golfer\'s elbow',
        ],
      },
      {
        heading: 'The sports medicine approach',
        body: 'Sports medicine is not just about surgery. The goal is returning you to sport at the same level — safely and sustainably. Accurate diagnosis first (clinical examination + MRI when needed), followed by the minimum intervention that achieves a full recovery. Most sports injuries are managed without surgery through structured rehabilitation and targeted injections.',
      },
      {
        heading: 'When surgery is the right answer',
        bullets: [
          'Complete ligament ruptures causing instability — ACL, shoulder dislocation',
          'Meniscus tears that are repairable — early repair preserves the meniscus and prevents arthritis',
          'Shoulder labral tears causing repeated dislocation (Bankart repair)',
          'Fractures sustained during sport',
          'Rotator cuff tears causing significant weakness not responding to 3+ months of physiotherapy',
        ],
      },
    ],
    faqs: [
      { q: 'I sprained my ankle playing cricket — do I need an X-ray?', a: 'If you cannot weight-bear at all, or there is bone tenderness over specific points, an X-ray is needed to rule out a fracture. Pure ligament sprains without those signs can be treated with RICE initially.' },
      { q: 'My shoulder dislocated playing kabaddi — will it happen again?', a: 'First-time dislocation in a young athlete under 25 has a re-dislocation rate of 70–90% without surgery. Arthroscopic Bankart repair reduces this to under 5%. For older first-time dislocators, physiotherapy alone gives acceptable results.' },
      { q: 'Can PRP treat my sports injury?', a: 'PRP has proven benefit in certain tendinopathies and in augmenting meniscus repairs. It is used selectively where evidence supports it — not as a blanket treatment for all sports injuries.' },
      { q: 'How soon can I return to sport after a muscle tear?', a: 'Grade 1 strains: 1–2 weeks. Grade 2 (partial tear): 3–8 weeks. Grade 3 (complete rupture): surgery may be needed, followed by 3–6 months of rehabilitation. Returning before full strength recovery is the main cause of re-injury.' },
    ],
  },

  {
    slug: 'keyhole-surgery',
    name: 'Arthroscopic (Keyhole) Surgery',
    group: 'Sports Medicine',
    featured: false,
    keywordTitle: 'Arthroscopy & Keyhole Surgery in Thane',
    metaDescription:
      'Arthroscopic (keyhole) surgery in Thane West: what it can and cannot fix in the knee, shoulder and ankle, what happens on the day, recovery and risks.',
    image: '/images/sports-arthroscopy.jpg',
    hero: 'A camera and fine instruments through small incisions — useful for specific problems, not for general arthritis.',
    specialty: 'sports-arthroscopy',
    reviewed: '2026-11-14',
    sources: [
      { label: 'Knee arthroscopy — patient information', url: 'https://orthoinfo.aaos.org/en/diseases--conditions/meniscus-tears/', publisher: 'AAOS OrthoInfo' },
      { label: 'Arthroscopic surgery for degenerative knee disease (Cochrane Review, 2022)', url: 'https://www.cochrane.org/evidence/CD014328_arthroscopic-surgery-degenerative-knee-disease', publisher: 'Cochrane' },
      { label: 'Rotator cuff tears: surgical treatment options', url: 'https://www.orthoinfo.org/treatment/rotator-cuff-tears-surgical-treatment-options/', publisher: 'AAOS OrthoInfo' },
    ],
    relatedArticles: [
      { slug: 'acl-tear-symptoms-treatment', title: 'ACL tear — symptoms and treatment' },
      { slug: 'meniscus-tear-do-i-need-surgery', title: 'Meniscus tear: do I need surgery?' },
      { slug: 'shoulder-dislocation-will-it-happen-again', title: 'Shoulder dislocation: will it happen again?' },
      { slug: 'rotator-cuff-tear-shoulder-pain-at-night', title: 'Rotator cuff tear' },
    ],
    sections: [
      {
        heading: 'What is arthroscopic (keyhole) surgery?',
        body: 'A thin camera is passed into the joint through a small cut, and instruments go in through one or two more. The surgeon works while watching a screen. Because the joint is not opened, there is usually less pain and a quicker early recovery than open surgery, but what is done inside the joint — a repair, a reconstruction — still needs its own healing time.',
      },
      {
        heading: 'What can be treated arthroscopically?',
        bullets: [
          'Knee: ACL reconstruction, meniscus repair or trimming, loose bodies, some cartilage problems',
          'Shoulder: repair after repeated dislocation (Bankart repair), rotator cuff repair, release of a stiff shoulder in selected cases',
          'Ankle: impingement, loose bodies and some cartilage lesions',
          'Diagnosis, occasionally, when examination and scans have not explained a mechanical problem',
        ],
      },
      {
        heading: 'Can arthroscopy help knee arthritis?',
        body: 'No. A 2022 Cochrane review of randomised trials found that arthroscopic surgery for degenerative knee disease, including "washout" and trimming of wear-related meniscus tears, gives little or no benefit in pain or function compared with placebo surgery. Arthroscopy is useful for specific structural problems — a torn ligament, a locked knee, a repairable meniscus tear — not for general wear.',
      },
      {
        heading: 'What happens on the day, and what is recovery like?',
        body: 'Most arthroscopic procedures are done under spinal or general anaesthesia, and many patients go home the same day or the next. Recovery depends on what was done: a simple trimming may need a few weeks, while a meniscus repair, ACL reconstruction or shoulder stabilisation needs a protected period and months of rehabilitation before sport. Your physiotherapy plan matters as much as the operation.',
      },
      {
        heading: 'What are the risks?',
        body: 'Serious complications are uncommon. The main risks are infection, blood clots, stiffness, swelling and, rarely, nerve or blood-vessel injury. Early movement, clot prevention where needed and wound care lower these risks. Any new fever, a hot swollen joint, calf pain or breathlessness after surgery needs urgent medical review.',
      },
    ],
    faqs: [
      { q: 'Is keyhole surgery safe?', a: 'Serious complications are uncommon. The main risks are infection, blood clots, stiffness and swelling.' },
      { q: 'How long does knee arthroscopy take?', a: 'It depends on the procedure: a diagnostic look or simple trimming is short, while an ACL reconstruction or meniscus repair takes longer.' },
      { q: 'Can arthroscopy treat knee arthritis?', a: 'No. Trials show washout and trimming give little or no lasting benefit for general wear. Arthroscopy is for specific structural problems.' },
      { q: 'Will I go home the same day?', a: 'Many people go home the same day or the next, depending on the procedure and their health.' },
    ],
},

  // ── SPINE SURGERY ────────────────────────────────────────────────────────

  {
    slug: 'spine-surgery',
    name: 'Spine Surgery',
    group: 'Spine Surgery',
    featured: true,
    keywordTitle: 'Spine Surgeon in Thane — PIVD & Back Pain',
    metaDescription:
      'Spine surgery in Thane — PIVD (disc slip), back pain (kamar dard) and spondylolisthesis, using minimally invasive techniques. Khopat, Thane West.',
    image: '/images/trauma-fracture.jpg',
    hero: 'Most back and neck pain resolves without surgery — but when it does not, precise spinal surgery restores life quality.',
    specialty: 'trauma-fracture',
    relatedArticles: [
      { slug: 'fracture-healing-surgery', title: 'Spinal fractures — when surgery is needed' },
    ],
    sections: [
      {
        heading: 'Spine conditions we treat',
        bullets: [
          'PIVD (Prolapsed Intervertebral Disc) — disc slip causing back pain with leg pain (sciatica) or arm pain',
          'Lumbar disc herniation — lower back disc pressing on the nerve; L4-L5 and L5-S1 most common',
          'Cervical disc herniation — neck disc pressing on the nerve; arm pain, numbness, weakness',
          'Spinal instability and spondylolisthesis — one vertebra slipping over another; causes chronic back pain and leg symptoms',
          'Lumbar canal stenosis — narrowing of the spinal canal causing back and leg pain with walking',
          'Thoracic spine conditions — mid-back fractures, disc problems, deformity',
          'Spinal fractures — vertebral compression fractures from osteoporosis or trauma; burst fractures from accidents',
          'Chronic back pain (kamar dard / कंबरदुखी) — comprehensive assessment and treatment programme',
        ],
      },
      {
        heading: 'Surgical procedures performed',
        bullets: [
          'Microdiscectomy — minimally invasive removal of the disc fragment pressing on the nerve; most patients go home within 24–48 hours',
          'Lumbar spinal fusion (TLIF/PLIF) — joining two vertebrae to correct instability or spondylolisthesis',
          'Cervical discectomy and fusion (ACDF) — disc removed from the front of the neck, vertebrae fused; highly effective for cervical PIVD',
          'Laminectomy and decompression — removing bone and soft tissue to enlarge the spinal canal in stenosis',
          'Vertebroplasty and kyphoplasty — cement injection for painful osteoporotic vertebral fractures; pain relief within 24–48 hours',
          'Thoracic spine surgery — fracture fixation and decompression for thoracic conditions',
        ],
      },
      {
        heading: 'When is spine surgery actually needed?',
        body: 'The majority of back and neck pain gets better with physiotherapy, posture correction, appropriate pain management and time — without surgery. Surgery is recommended when:',
        bullets: [
          'Nerve compression is causing progressive weakness (foot drop, hand weakness)',
          'Bladder or bowel control is affected — this is a surgical emergency',
          'Severe radiculopathy (shooting pain down the arm or leg) has not responded to 6–12 weeks of conservative treatment',
          'Spinal instability causing mechanical pain that limits daily function',
          'Imaging confirms a structural problem that matches the symptoms precisely',
        ],
      },
    ],
    faqs: [
      { q: 'What is PIVD and do I need surgery for it?', a: 'PIVD (Prolapsed Intervertebral Disc) means the soft inner part of a disc has pushed out through its outer layer and is pressing on a nerve — causing back pain that radiates down the leg (sciatica) or arm. Most cases (90%) resolve with physiotherapy and pain management within 6–12 weeks. Surgery is needed when there is progressive weakness, bladder/bowel involvement, or pain that does not respond to conservative treatment.' },
      { q: 'What is the recovery from a microdiscectomy?', a: 'Most patients go home within 24–48 hours. Walking starts the same day. Light activity resumes within 1–2 weeks. Desk work typically at 2–4 weeks. Physiotherapy begins soon after surgery to strengthen the core muscles and prevent recurrence.' },
      { q: 'My MRI shows a disc bulge — does it need surgery?', a: 'An MRI finding alone is not a reason for surgery. Many people have disc bulges on MRI with no symptoms at all. Surgery is decided by the symptoms (especially weakness and bladder/bowel changes) combined with the imaging — not imaging alone.' },
      { q: 'Can I avoid spine surgery for spondylolisthesis?', a: 'Mild spondylolisthesis is often managed successfully with core strengthening, weight management and activity modification. Progressive slippage, instability causing severe mechanical pain, or nerve compression symptoms that do not respond to conservative measures are reasons to consider surgical fusion.' },
      { q: 'What is kamar dard (back pain) and when should I see a specialist?', a: 'Kamar dard (कंबरदुखी / back pain) is very common — most episodes resolve in 4–6 weeks. See a specialist if: pain shoots down the leg, you have weakness or numbness, pain started after an injury or fall, there is no improvement after 4–6 weeks of rest and basic treatment, or you are over 50 with new-onset back pain.' },
    ],
  },

  {
    slug: 'shoulder-elbow-surgery',
    name: 'Shoulder & Elbow Treatment',
    group: 'Sports Medicine',
    featured: false,
    keywordTitle: 'Shoulder & Elbow Specialist in Thane',
    metaDescription:
      'Shoulder and elbow problems in Thane West: frozen shoulder, rotator cuff tears, dislocation, tennis and golfer\'s elbow. What helps, and when surgery is needed.',
    image: '/images/sports-arthroscopy.jpg',
    hero: 'Most shoulder and elbow pain settles with the right exercises and time. Surgery is for the problems that do not.',
    specialty: 'sports-arthroscopy',
    reviewed: '2026-11-14',
    sources: [
      { label: 'Frozen shoulder (adhesive capsulitis)', url: 'https://www.orthoinfo.org/diseases--conditions/frozen-shoulder/', publisher: 'AAOS OrthoInfo' },
      { label: 'Rotator cuff tears', url: 'https://www.orthoinfo.org/diseases--conditions/rotator-cuff-tears/', publisher: 'AAOS OrthoInfo' },
      { label: 'Chronic shoulder instability', url: 'https://orthoinfo.aaos.org/en/diseases--conditions/chronic-shoulder-instability/', publisher: 'AAOS OrthoInfo' },
      { label: 'Tennis elbow (lateral epicondylitis)', url: 'https://www.orthoinfo.org/diseases--conditions/tennis-elbow-lateral-epicondylitis/', publisher: 'AAOS OrthoInfo' },
    ],
    relatedArticles: [
      { slug: 'frozen-shoulder-treatment', title: 'Frozen shoulder: causes and treatment' },
      { slug: 'frozen-shoulder-exercises-what-to-do-in-each-stage', title: 'Frozen shoulder exercises' },
      { slug: 'rotator-cuff-tear-shoulder-pain-at-night', title: 'Shoulder pain at night: rotator cuff tear?' },
      { slug: 'shoulder-dislocation-will-it-happen-again', title: 'Shoulder dislocation: will it happen again?' },
      { slug: 'tennis-elbow-steroid-injection-or-physiotherapy', title: 'Tennis elbow: injection or physiotherapy?' },
      { slug: 'golfers-elbow-inner-elbow-pain-what-to-do', title: 'Golfer\'s elbow' },
    ],
    sections: [
      {
        heading: 'Which shoulder and elbow problems are treated?',
        bullets: [
          'Frozen shoulder — painful stiffness, more common with diabetes',
          'Rotator cuff tears and tendon pain — night pain and weakness lifting the arm',
          'Shoulder dislocation and instability — a shoulder that has come out or feels loose',
          'Shoulder fractures — collarbone, upper arm and shoulder-blade injuries',
          'Tennis elbow — pain on the outer elbow with gripping',
          'Golfer\'s elbow — pain on the inner elbow, sometimes with tingling in the little finger',
          'Elbow fractures and dislocations',
        ],
      },
      {
        heading: 'Is it frozen shoulder or a rotator cuff tear?',
        body: 'The key difference is movement. In frozen shoulder the joint lining is tight, so the arm cannot be moved fully even when someone else lifts it. In a rotator cuff tear, lifting the arm yourself is weak and painful, but someone else can usually move it through its range. An examination usually separates the two; scans are chosen based on what it shows.',
      },
      {
        heading: 'Does frozen shoulder need surgery?',
        body: 'Usually not. Frozen shoulder stiffens for months before slowly freeing up, and full recovery often takes one to three years. Pain control and regular gentle stretching help most people, sometimes with an early steroid injection. Procedures such as hydrodilatation, manipulation or arthroscopic release are kept for shoulders that stay stiff and disabling despite a fair trial.',
      },
      {
        heading: 'When does a rotator cuff tear need repair?',
        body: 'A torn tendon does not reattach by itself, but AAOS reports that non-surgical treatment relieves pain and improves function in about 80–85% of patients, through months of structured strengthening. Repair is considered for acute tears in active people, large tears with significant weakness, or when rehabilitation has not helped.',
      },
      {
        heading: 'Will a dislocated shoulder keep coming out?',
        body: 'The risk is highest in people under 30 and falls after that. A short time in a sling followed by physiotherapy is the usual first step. Stabilisation surgery is advised for repeated dislocations or significant bone loss, and is worth discussing early for young contact-sport athletes.',
      },
      {
        heading: 'What helps tennis and golfer\'s elbow?',
        body: 'Most cases settle without surgery: rest from the painful activity, simple pain relief and forearm-strengthening exercises. Steroid injections can give short-term relief, but in a trial of 165 adults with tennis elbow, those given a steroid injection were less likely to be fully recovered at one year than those given a dummy injection, so they are used sparingly. Surgery is considered only after many months of good non-surgical care.',
      },
    ],
    faqs: [
      { q: 'Why does my shoulder hurt more at night?', a: 'Night pain, especially lying on that side, is typical of rotator cuff problems and of frozen shoulder. An examination usually tells which.' },
      { q: 'Does a rotator cuff tear always need surgery?', a: 'No. Non-surgical treatment helps about 80–85% of patients, according to AAOS. Repair is considered for acute tears in active people or when rehabilitation fails.' },
      { q: 'How long does frozen shoulder last?', a: 'Often one to three years in total, through freezing, frozen and thawing stages. Most people improve substantially with stretching and pain control.' },
      { q: 'Should I have a steroid injection for tennis elbow?', a: 'Not as a first choice. It can ease pain briefly, but in a large trial people given a steroid injection were less likely to be fully recovered at one year than those given a dummy injection.' },
    ],
},

];

export const PROCEDURE_ROUTES = PROCEDURES.map((p) => `/procedures/${p.slug}`);
