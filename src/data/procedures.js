// Dedicated procedure landing pages — each targets a high-intent local keyword.
// group:    organises the Navbar dropdown into sections.
// featured: true = shown in Footer; false = accessible via nav dropdown & specialty pages.
// relatedArticles: linked at the bottom of each procedure page.

export const PROCEDURES = [

  // ── JOINT REPLACEMENT ────────────────────────────────────────────────────

  {
    slug: 'knee-replacement',
    name: 'Robotic Knee Replacement',
    group: 'Joint Replacement',
    featured: true,
    keywordTitle: 'Robotic Knee Replacement Surgeon in Thane',
    metaDescription:
      'Robotic total & partial knee replacement in Thane by Dr. Niranjan Ghag — fellowship-trained joint replacement surgeon. Walk the same day, most patients home in 2–3 days. Consultations in English, मराठी & हिंदी at Khopat, Thane West.',
    image: '/images/joint-replacement.jpg',
    hero: 'Precision-aligned implants, smaller incisions and faster recovery — walking within hours of surgery.',
    specialty: 'joint-replacement',
    relatedArticles: [
      { slug: 'early-signs-knee-arthritis', title: 'Early signs of knee arthritis' },
      { slug: 'robotic-knee-replacement-recovery', title: 'Robotic knee replacement recovery' },
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
        body: 'A 3D plan of your knee is created before surgery. During the operation, the robotic arm keeps every bone cut exactly on plan — alignment accurate to fractions of a millimetre, healthy bone and ligaments preserved. Published results show more accurate implant positioning, less soft-tissue trauma, lower early pain scores and quicker rehabilitation than conventional techniques. The surgeon operates; the robot ensures precision.',
      },
      {
        heading: 'Your recovery, step by step',
        bullets: [
          'Same day: standing and walking with a walker, usually within hours',
          'Day 2–3: staircase training, discharge home in most cases',
          'Week 2–3: walking indoors without support; sutures reviewed',
          'Week 6: most daily activities, desk work, short outings',
          'Month 3 onward: full routine including travel; implant designed to last 20–25+ years',
        ],
      },
      {
        heading: 'What determines the cost?',
        body: 'Total cost varies with the implant choice, robotic technology use, room category and insurance coverage. Most major insurers and cashless schemes cover knee replacement. Bring your policy details to the consultation — you will get a clear written estimate before any decision, with no obligation.',
      },
    ],
    faqs: [
      { q: 'Am I too old (or too young) for knee replacement?', a: 'Age alone is not the deciding factor. Patients from their 50s to late 80s undergo successful replacement; what matters is fitness for anaesthesia, the severity of arthritis, and how much pain limits your life. Modern implants lasting 20–25 years also make surgery reasonable for younger patients with severe disease.' },
      { q: 'How painful is the surgery and recovery?', a: 'With modern multimodal pain management — nerve blocks, local infiltration and scheduled medication — most patients describe the pain as far less than they feared, and are walking comfortably within 24 hours.' },
      { q: 'Can both knees be replaced together?', a: 'Yes, for medically fit patients, both knees can be done in one anaesthesia (bilateral TKR) — one hospital stay and one recovery period. Your cardiac and general fitness are assessed first.' },
      { q: 'How soon can I sit cross-legged or use Indian toilets?', a: 'High-flexion implant designs and robotic alignment allow many patients to regain deep bending. This depends on your pre-operative flexibility and is discussed honestly during planning.' },
    ],
  },

  {
    slug: 'hip-replacement',
    name: 'Total Hip Replacement',
    group: 'Joint Replacement',
    featured: true,
    keywordTitle: 'Hip Replacement Surgeon in Thane',
    metaDescription:
      'Total hip replacement in Thane by Dr. Niranjan Ghag — fellowship-trained hip & joint replacement surgeon. Walk within 24 hours, modern implants lasting 20–25+ years. Khopat, Thane West, opp. Viviana Mall.',
    image: '/images/joint-replacement.jpg',
    hero: 'One of the most successful operations in all of medicine — reliable pain relief and restored independence.',
    specialty: 'joint-replacement',
    relatedArticles: [
      { slug: 'hip-replacement-signs', title: 'Signs you may need hip replacement' },
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
        body: 'The worn ball-and-socket joint is replaced with smooth, durable implants through a tissue-sparing approach. Most patients stand and walk within 24 hours, climb stairs within a week, and return to independent daily life within 4–6 weeks. Modern ceramic and highly cross-linked polyethylene bearings are expected to last 20–25 years or more — which is why hip replacement is now routinely offered to younger patients with AVN.',
      },
      {
        heading: 'Why timing matters',
        body: 'Waiting too long weakens hip muscles, shortens the limb, and worsens bone quality — making surgery technically harder and rehabilitation slower. If pain has changed how you walk or what you can do, an evaluation with a standing X-ray gives you clear answers; surgery remains your decision.',
      },
    ],
    faqs: [
      { q: 'How long will the implant last?', a: 'Modern bearing surfaces are expected to last 20–25 years or longer. Registry data shows over 90% of hip replacements still functioning well at 15 years.' },
      { q: 'What is AVN and why do younger patients need hip replacement?', a: 'Avascular necrosis is loss of blood supply to the femoral head, common in 30s–40s, often after steroid use or alcohol excess. Early stages can be treated with preservation procedures; advanced collapse needs replacement — with excellent results.' },
      { q: 'Will I be able to sit on the floor afterwards?', a: 'With modern implants and surgical techniques, many patients regain floor-sitting. It depends on implant type and your anatomy — this is discussed honestly before surgery.' },
      { q: 'How soon can I return to work?', a: 'Desk work: typically 3–4 weeks. Standing or field work: 6–10 weeks depending on demands. Driving usually resumes around 4–6 weeks.' },
    ],
  },

  {
    slug: 'knee-pain',
    name: 'Knee Pain Treatment',
    group: 'Joint Replacement',
    featured: false,
    keywordTitle: 'Knee Pain Doctor in Thane | Ghutne Dard Ka Ilaj — गुडघेदुखी',
    metaDescription:
      'Knee pain specialist in Thane — Dr. Niranjan Ghag diagnoses and treats ghutne dard (गुडघेदुखी): arthritis, meniscus tears, ligament injuries. Accurate diagnosis, X-ray on the day, clear treatment plan. Khopat, Thane West.',
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
          'Injections — corticosteroid for inflammation, hyaluronic acid for arthritis, PRP selectively',
          'Arthroscopy — keyhole surgery to clean, repair or reconstruct inside the knee',
          'Knee replacement — only when arthritis is advanced and all other treatments have failed',
        ],
      },
    ],
    faqs: [
      { q: 'My knee clicks and grinds — is that serious?', a: 'Clicking and crepitus (grinding) are common and usually harmless if there is no pain, swelling or locking. Clicking with pain or swelling needs investigation.' },
      { q: 'Can exercise make knee arthritis worse?', a: 'The right exercise actually protects the knee — it strengthens the muscles that take load off the joint. Walking, cycling and swimming are well tolerated and encouraged.' },
      { q: 'Are knee injections effective?', a: 'Corticosteroid injections provide significant short-term relief (4–12 weeks) for inflamed arthritic knees. Hyaluronic acid has more modest evidence. PRP is used selectively where evidence supports it.' },
      { q: 'When should I see a doctor for knee pain?', a: 'Immediately: if the knee is severely swollen, very hot, or locked. Soon: if pain limits your walking, work, or sleep for more than 2–3 weeks despite rest.' },
    ],
  },

  {
    slug: 'joint-pain',
    name: 'Joint Pain Treatment',
    group: 'Joint Replacement',
    featured: true,
    keywordTitle: 'Joint Pain Specialist in Thane | Sandhe Dukhi Upchar — सांधेदुखी',
    metaDescription:
      'Joint pain specialist in Thane — Dr. Niranjan Ghag treats sandhe dukhi (सांधेदुखी), jodo ka dard (जोड़ों का दर्द): knee, hip, shoulder and ankle joint pain. Accurate diagnosis, modern treatment. Khopat, Thane West opp. Viviana Mall.',
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
    keywordTitle: 'Trauma Surgeon in Thane | Fracture Treatment Specialist',
    metaDescription:
      'Advanced trauma and fracture surgery in Thane by Dr. Niranjan Ghag — humerus, femur, tibia, fibula, clavicle, ankle, foot, pelvis fractures. Road accident injuries, complex fractures, polytrauma. Joshi\'s Neurotrauma Centre, Khopat, Thane West.',
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
    keywordTitle: 'Fracture Treatment in Thane | Broken Bone Specialist — Haddi Tootna',
    metaDescription:
      'Expert fracture treatment in Thane — haddi tootna (हाडी तुटणे / हड्डी टूटना), all bones treated by Dr. Niranjan Ghag. Humerus, femur, tibia, fibula, forearm, wrist, clavicle, ankle, foot fractures. Khopat, Thane West.',
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
    keywordTitle: 'Hand Surgeon in Thane | Wrist & Hand Surgery Specialist',
    metaDescription:
      'Hand and wrist surgery in Thane by Dr. Niranjan Ghag — wrist fractures, finger fractures, tendon injuries, trigger finger, carpal tunnel syndrome. Expert orthopaedic hand care at Khopat, Thane West opp. Viviana Mall.',
    image: '/images/trauma-fracture.jpg',
    hero: 'Your hands do everything — precise surgery and early rehabilitation restore what an injury takes away.',
    specialty: 'trauma-fracture',
    relatedArticles: [
      { slug: 'fracture-healing-surgery', title: 'How fractures heal — and when surgery is needed' },
    ],
    sections: [
      {
        heading: 'Conditions treated',
        bullets: [
          'Wrist fractures — distal radius, scaphoid, perilunate dislocations',
          'Metacarpal and finger fractures — boxing fractures, crush injuries, sports injuries',
          'Tendon injuries — flexor and extensor tendon cuts requiring prompt repair',
          'Trigger finger (stenosing tenosynovitis) — finger locking or clicking in a bent position',
          'De Quervain\'s tenosynovitis — pain on the thumb side of the wrist with gripping',
          'Carpal tunnel syndrome — numbness, tingling and weakness from median nerve compression',
          'Mallet finger — fingertip droop after tendon avulsion injury',
          'Ganglion cysts — fluid-filled lumps around the wrist or finger joints',
        ],
      },
      {
        heading: 'Trigger finger and De Quervain\'s — common, treatable',
        body: 'Trigger finger causes a finger to lock or snap when bending — very common in people who grip repeatedly (drivers, housewives, mechanics). Most respond to a single steroid injection; persistent cases need a small day-care release procedure. De Quervain\'s causes pain at the base of the thumb wrist with pinching or gripping — treated with splinting, injection or surgical release with excellent results.',
      },
      {
        heading: 'Carpal tunnel syndrome',
        body: 'Carpal tunnel syndrome causes numbness, tingling and weakness in the thumb, index and middle fingers — often worst at night or when driving. It is the most common nerve compression condition in the upper limb. Mild cases: night splint and injections. Moderate–severe: a 15-minute day-care carpal tunnel release gives immediate lasting relief.',
      },
    ],
    faqs: [
      { q: 'I have numbness in my fingers at night — what is it?', a: 'Night-time numbness in the first three fingers (thumb, index, middle) is the classic presentation of carpal tunnel syndrome. A nerve conduction study confirms the diagnosis. Treatment ranges from a night splint to a simple surgical release.' },
      { q: 'My finger keeps getting stuck in a bent position — what is wrong?', a: 'This is trigger finger — the tendon catches on a thickened pulley sheath. A single injection resolves it in 60–70% of cases. If it returns, a day-care surgical release gives a permanent cure.' },
      { q: 'How long after a tendon cut should surgery be done?', a: 'Flexor tendon repairs are best done within 12–24 hours of injury. Seeking emergency care promptly gives the best outcomes.' },
    ],
  },

  // ── FOOT & ANKLE ─────────────────────────────────────────────────────────

  {
    slug: 'foot-ankle-surgery',
    name: 'Foot & Ankle Surgery',
    group: 'Foot & Ankle',
    featured: true,
    keywordTitle: 'Foot & Ankle Surgeon in Thane | Foot Pain Specialist',
    metaDescription:
      'Foot and ankle surgery in Thane by Dr. Niranjan Ghag — ankle fractures, flat foot, bunion (hallux valgus), Achilles tendon, ankle arthritis, diabetic foot. Expert orthopaedic care at Khopat, Thane West opp. Viviana Mall.',
    image: '/images/foot-ankle.jpg',
    hero: 'Foot and ankle problems affect every step — and most have excellent treatment options.',
    specialty: 'foot-ankle',
    relatedArticles: [
      { slug: 'heel-pain-plantar-fasciitis', title: 'Heel pain — causes and treatment' },
      { slug: 'ankle-sprain-vs-fracture', title: 'Ankle sprain vs fracture — how to tell the difference' },
    ],
    sections: [
      {
        heading: 'Conditions we treat',
        bullets: [
          'Ankle fractures — bimalleolar, trimalleolar, Maisonneuve; most displaced fractures need surgical fixation',
          'Ankle instability — chronic giving-way after repeated sprains; treated with ligament reconstruction',
          'Achilles tendon rupture — sudden "snap" in the back of the leg; surgery returns athletes faster',
          'Flat foot (pes planus) — symptomatic flat foot with pain, especially in children and young adults',
          'Bunion (hallux valgus) — painful bump at the base of the big toe; corrected surgically when symptomatic',
          'Hammer toes — curled toes causing shoe pressure and pain',
          'Ankle arthritis — end-stage treated with ankle fusion or replacement',
          'Diabetic foot — Charcot arthropathy, chronic ulcers, infection management',
        ],
      },
      {
        heading: 'Ankle fracture — why surgery usually wins',
        body: 'Most displaced ankle fractures heal better with surgical fixation than in a cast. Precise reduction and fixation allows earlier movement, better alignment, and significantly lower risk of long-term ankle arthritis. A cast-treated displaced ankle fracture that heals even slightly crooked often leads to chronic pain within 5–10 years.',
      },
      {
        heading: 'Achilles tendon rupture',
        body: 'The Achilles is the strongest tendon in the body — but when it ruptures (usually during a sudden sprint or jump), it is debilitating. Surgical repair stitches the tendon ends together, restoring full push-off strength. Most patients return to recreational sport by 6 months. Non-surgical treatment in a boot is an option for sedentary patients.',
      },
    ],
    faqs: [
      { q: 'My ankle still hurts months after a sprain — is that normal?', a: 'A simple sprain should feel much better within 4–6 weeks. Persistent pain beyond that suggests either a missed fracture, ligament instability, peroneal tendon injury or cartilage damage inside the ankle — all detectable on MRI.' },
      { q: 'What is the recovery after ankle surgery?', a: 'For most ankle fractures: non-weight-bearing for 6 weeks, then graduated weight-bearing with physiotherapy. Most patients walk normally by 3–4 months.' },
      { q: 'My child has flat feet — does it need treatment?', a: 'Most children under 8 have flat feet that resolve naturally. Symptomatic flat feet with pain, or flat feet that persist beyond age 8–10 without improvement, should be assessed. Insoles usually help; surgery is rarely needed in children.' },
    ],
  },

  {
    slug: 'heel-pain',
    name: 'Heel Pain & Plantar Fasciitis Treatment',
    group: 'Foot & Ankle',
    featured: false,
    keywordTitle: 'Heel Pain Treatment in Thane | Plantar Fasciitis | Tacchi Dard — टाच दुखणे',
    metaDescription:
      'Heel pain and plantar fasciitis treatment in Thane — tacchi dard (टाच दुखणे), heel spur, Achilles tendinitis treated by Dr. Niranjan Ghag. Non-surgical first-line treatment, injections, surgery when needed. Khopat, Thane West.',
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
          'Stretching — calf and plantar fascia stretches; the most effective treatment when done consistently',
          'Supportive footwear and insoles — heel cups, arch support; avoid walking barefoot on hard floors',
          'Night splint — keeps the plantar fascia stretched while sleeping',
          'Corticosteroid injection — targeted relief for persistent cases; significant improvement in most',
          'Shockwave therapy — for chronic cases not responding after 3–6 months',
          'Surgery — plantar fascia release; reserved for the small number who fail all non-surgical treatment',
        ],
      },
    ],
    faqs: [
      { q: 'How long does plantar fasciitis take to heal?', a: 'With consistent stretching and appropriate footwear, 80% of patients are significantly better within 6–12 months. An injection can accelerate this considerably. Surgery is a last resort for the 5–10% who do not respond.' },
      { q: 'Does a heel spur always need surgery?', a: 'Almost never. The spur itself is rarely the source of pain — the plantar fascia inflammation is. Treating the inflammation resolves the pain without touching the spur.' },
      { q: 'My heel pain is worst in the morning — why?', a: 'The plantar fascia tightens during sleep. The first steps suddenly stretch it, causing pain. This "first-step pain" that eases after a few minutes is the classic presentation of plantar fasciitis.' },
    ],
  },

  // ── SPORTS MEDICINE ──────────────────────────────────────────────────────

  {
    slug: 'acl-reconstruction',
    name: 'ACL Reconstruction',
    group: 'Sports Medicine',
    featured: true,
    keywordTitle: 'ACL Reconstruction Surgeon in Thane',
    metaDescription:
      'Arthroscopic ACL reconstruction in Thane by Dr. Niranjan Ghag — sports medicine fellowship-trained surgeon. Keyhole surgery, same-day walking, structured return-to-sport protocol. Khopat, Thane West.',
    image: '/images/sports-arthroscopy.jpg',
    hero: 'Keyhole ligament reconstruction with a criteria-based path back to the sport you love.',
    specialty: 'sports-arthroscopy',
    relatedArticles: [
      { slug: 'acl-tear-symptoms-treatment', title: 'ACL tear — symptoms and treatment' },
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
      { q: 'Which graft is best?', a: 'There is no single best graft — hamstring, patellar tendon and quadriceps grafts each have trade-offs in strength, harvest pain and re-rupture rates. The choice is matched to your sport, age and anatomy.' },
      { q: 'How long is the hospital stay?', a: 'ACL reconstruction is typically a day-care or one-night procedure. You walk with support before discharge and start physiotherapy immediately.' },
      { q: 'Will my knee be as good as before?', a: 'With a well-done reconstruction and completed rehabilitation, most athletes return to their previous level. Compliance with the full physiotherapy protocol is the biggest factor — more than the surgery itself.' },
    ],
  },

  {
    slug: 'sports-injuries',
    name: 'Sports Injuries Treatment',
    group: 'Sports Medicine',
    featured: false,
    keywordTitle: 'Sports Injury Doctor in Thane | Sports Medicine Specialist',
    metaDescription:
      'Sports injuries specialist in Thane — Dr. Niranjan Ghag treats ACL tears, meniscus injuries, shoulder dislocations, muscle tears, ankle sprains and all sports trauma. Khel mein chot (खेळातील दुखापत). Khopat, Thane West.',
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
    keywordTitle: 'Arthroscopy Surgeon in Thane | Keyhole Surgery for Knee & Shoulder',
    metaDescription:
      'Arthroscopic keyhole surgery in Thane — knee arthroscopy, shoulder arthroscopy, ACL reconstruction, meniscus repair by Dr. Niranjan Ghag. Day-care procedures, smaller incisions, faster recovery. Khopat, Thane West.',
    image: '/images/sports-arthroscopy.jpg',
    hero: 'Keyhole surgery means seeing inside the joint clearly — and fixing it through incisions smaller than your fingertip.',
    specialty: 'sports-arthroscopy',
    relatedArticles: [
      { slug: 'acl-tear-symptoms-treatment', title: 'ACL tear — the case for keyhole surgery' },
    ],
    sections: [
      {
        heading: 'What is arthroscopic (keyhole) surgery?',
        body: 'Arthroscopy uses a camera inserted through a small incision to see inside a joint on a high-definition screen. Surgical instruments through 1–2 additional small incisions allow repair, reconstruction or removal of damaged tissue — without the large incision and slow recovery of traditional open surgery.',
      },
      {
        heading: 'Procedures performed arthroscopically',
        bullets: [
          'Knee: ACL reconstruction, meniscus repair/trimming, cartilage treatment, loose body removal',
          'Shoulder: Bankart repair (instability), rotator cuff repair, SLAP repair, subacromial decompression',
          'Ankle: cartilage lesion treatment, impingement release, loose body removal',
          'Diagnostic arthroscopy — when imaging is inconclusive, the camera gives a definitive answer',
        ],
      },
      {
        heading: 'Advantages over open surgery',
        bullets: [
          'Smaller incisions — typically 2–3 cuts of 5 mm each',
          'Day-care in most cases — home the same or next day',
          'Less post-operative pain — less tissue damage',
          'Faster rehabilitation — joints move sooner, muscles recover faster',
          'Lower infection risk — small wounds close more quickly',
        ],
      },
    ],
    faqs: [
      { q: 'Is keyhole surgery safe?', a: 'Arthroscopic surgery has a very low complication rate. Risks include infection (<0.5%), blood clots (minimised by early movement), and instrument breakage (rare).' },
      { q: 'How long does knee arthroscopy take?', a: 'Diagnostic arthroscopy: 20–30 minutes. ACL reconstruction: 60–90 minutes. Meniscus repair: 45–60 minutes. All performed under spinal or general anaesthesia.' },
      { q: 'Can arthroscopy treat knee arthritis?', a: 'For generalised arthritis, no — washout has not been shown to provide lasting benefit. Arthroscopy is valuable for specific structural problems: meniscus tears, ligament reconstruction, cartilage lesions.' },
    ],
  },

  // ── SPINE SURGERY ────────────────────────────────────────────────────────

  {
    slug: 'spine-surgery',
    name: 'Spine Surgery',
    group: 'Spine Surgery',
    featured: true,
    keywordTitle: 'Spine Surgeon in Thane | PIVD, Back Pain & Spine Surgery Specialist',
    metaDescription:
      'Spine surgery in Thane by Dr. Niranjan Ghag — PIVD (disc slip), back pain (kamar dard), lumbar, thoracic and cervical spine surgery, spinal instability, spondylolisthesis. Minimally invasive techniques. Khopat, Thane West opp. Viviana Mall.',
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

];

export const PROCEDURE_ROUTES = PROCEDURES.map((p) => `/procedures/${p.slug}`);
