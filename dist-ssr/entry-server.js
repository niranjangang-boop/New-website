import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Link, NavLink, useParams, Navigate, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect, useMemo } from "react";
const phone_display = "+91 90760 79000";
const phone_raw = "919076079000";
const email = "Drortho101@gmail.com";
const clinics = [
  {
    name: "Joshi's Neurotrauma Centre",
    short_location: "Khopat, Thane West",
    address: "Z5, Flower Valley Complex, Commercial Complex, E.E, Service Rd, opp. Viviana Mall, Khopat, Runwal Nagar, Thane West, Thane, Maharashtra 400601",
    map_url: "https://maps.app.goo.gl/ZwSs24See2xtcHXR7",
    landmark: "Opposite Viviana Mall, next to Bank of Baroda",
    hours: [
      {
        days: "Monday – Saturday",
        time: "12:00 AM – 8:00 AM"
      },
      {
        days: "Monday – Saturday",
        time: "3:00 PM – 11:30 PM"
      },
      {
        days: "Sunday",
        time: "Open 24 hours"
      }
    ]
  },
  {
    name: "Sahayogi Hospital LLP",
    short_location: "Naupada, Thane West",
    address: "Post Office, Sita Vihar Society, Lal Bahadur Shastri Marg, near Navpada, Naupada, Damani Estate, Thane, Maharashtra 400602",
    map_url: "https://maps.app.goo.gl/VMzDEiSL7RxFEhZM7",
    landmark: "Near Navpada, Naupada",
    hours: [
      {
        days: "Monday – Saturday",
        time: "12:00 AM – 8:00 AM"
      },
      {
        days: "Monday – Saturday",
        time: "3:00 PM – 11:30 PM"
      },
      {
        days: "Sunday",
        time: "Open 24 hours"
      }
    ]
  }
];
const settings = {
  phone_display,
  phone_raw,
  email,
  clinics
};
const SITE = {
  name: "Dr. Niranjan Ghag",
  fullName: "Dr. Niranjan Sunil Ghag",
  title: "Orthopedic Surgeon",
  url: "https://www.drniranjanghag.com",
  email: settings.email,
  phoneDisplay: settings.phone_display,
  phoneRaw: settings.phone_raw,
  whatsapp: `https://wa.me/${settings.phone_raw}`
};
const CLINICS = (settings.clinics || []).map((c) => ({
  name: c.name,
  shortLocation: c.short_location,
  address: c.address,
  mapUrl: c.map_url,
  landmark: c.landmark,
  hours: c.hours || []
}));
const CLINIC = CLINICS[0] || {
  name: "",
  address: "",
  mapUrl: ""
};
const SPECIALTIES = [
  {
    slug: "joint-replacement",
    name: "Joint Replacement (Hip & Knee)",
    short: "Robotic-assisted, tissue-sparing hip and knee replacement for rapid recovery.",
    image: "/images/joint-replacement.jpg",
    points: [
      "Robotic Total Knee Replacement",
      "Total Hip Replacement",
      "Revision Joint Replacement",
      "Partial (Unicondylar) Knee Replacement"
    ]
  },
  {
    slug: "foot-ankle",
    name: "Foot & Ankle Surgery",
    short: "Comprehensive care for complex deformities, trauma and sports injuries of the foot.",
    image: "/images/foot-ankle.jpg",
    points: [
      "Foot Deformities (Bunions, Flat Foot)",
      "Achilles Tendon Disorders",
      "Ankle Arthroscopy & Ligament Repair",
      "Diabetic Foot Care"
    ]
  },
  {
    slug: "sports-arthroscopy",
    name: "Sports Injuries & Arthroscopy",
    short: "ACL reconstruction, meniscus repair and advanced keyhole surgery with minimal downtime.",
    image: "/images/sports-arthroscopy.jpg",
    points: [
      "ACL & Ligament Reconstruction",
      "Meniscus Repair",
      "Shoulder Arthroscopy (Rotator Cuff)",
      "Sports Rehabilitation Protocols"
    ]
  },
  {
    slug: "trauma-fracture",
    name: "Trauma & Fracture Management",
    short: "Expert management of complex fractures ensuring optimal bone healing and alignment.",
    image: "/images/trauma-fracture.jpg",
    points: [
      "Complex Intra-articular Fractures",
      "Pelvic & Acetabular Trauma",
      "Malunion & Nonunion Correction",
      "Polytrauma Care"
    ]
  }
];
const PROCEDURES = [
  // ── JOINT REPLACEMENT ────────────────────────────────────────────────────
  {
    slug: "knee-replacement",
    name: "Robotic Knee Replacement",
    group: "Joint Replacement",
    featured: true,
    keywordTitle: "Robotic Knee Replacement Surgeon in Thane",
    metaDescription: "Robotic total & partial knee replacement in Thane by Dr. Niranjan Ghag — fellowship-trained joint replacement surgeon. Walk the same day, most patients home in 2–3 days. Consultations in English, मराठी & हिंदी at Khopat, Thane West.",
    image: "/images/joint-replacement.jpg",
    hero: "Precision-aligned implants, smaller incisions and faster recovery — walking within hours of surgery.",
    specialty: "joint-replacement",
    relatedArticles: [
      { slug: "early-signs-knee-arthritis", title: "Early signs of knee arthritis" },
      { slug: "robotic-knee-replacement-recovery", title: "Robotic knee replacement recovery" },
      { slug: "robotic-knee-replacement-cost-thane", title: "Robotic knee replacement cost in Thane & Mumbai" },
      { slug: "knee-arthritis-treatment-without-surgery", title: "Knee arthritis treatment without surgery" }
    ],
    sections: [
      {
        heading: "When is knee replacement the right choice?",
        body: "Knee replacement is considered when arthritis pain persists despite medication, physiotherapy and injections — not before. The strongest indicators:",
        bullets: [
          "Pain that limits walking distance, stairs or daily activities",
          "Night pain that disturbs sleep despite medication",
          "Visible deformity (bow legs or knock knees) that is progressing",
          "X-ray showing advanced (grade 3–4) arthritis with bone-on-bone contact"
        ]
      },
      {
        heading: "Why robotic-assisted?",
        body: "A 3D plan of your knee is created before surgery. During the operation, the robotic arm keeps every bone cut exactly on plan — alignment accurate to fractions of a millimetre, healthy bone and ligaments preserved. Published results show more accurate implant positioning, less soft-tissue trauma, lower early pain scores and quicker rehabilitation than conventional techniques. The surgeon operates; the robot ensures precision."
      },
      {
        heading: "Your recovery, step by step",
        bullets: [
          "Same day: standing and walking with a walker, usually within hours",
          "Day 2–3: staircase training, discharge home in most cases",
          "Week 2–3: walking indoors without support; sutures reviewed",
          "Week 6: most daily activities, desk work, short outings",
          "Month 3 onward: full routine including travel; implant designed to last 20–25+ years"
        ]
      },
      {
        heading: "What determines the cost?",
        body: "Total cost varies with the implant choice, robotic technology use, room category and insurance coverage. Most major insurers and cashless schemes cover knee replacement. Bring your policy details to the consultation — you will get a clear written estimate before any decision, with no obligation."
      }
    ],
    faqs: [
      { q: "Am I too old (or too young) for knee replacement?", a: "Age alone is not the deciding factor. Patients from their 50s to late 80s undergo successful replacement; what matters is fitness for anaesthesia, the severity of arthritis, and how much pain limits your life. Modern implants lasting 20–25 years also make surgery reasonable for younger patients with severe disease." },
      { q: "How painful is the surgery and recovery?", a: "With modern multimodal pain management — nerve blocks, local infiltration and scheduled medication — most patients describe the pain as far less than they feared, and are walking comfortably within 24 hours." },
      { q: "Can both knees be replaced together?", a: "Yes, for medically fit patients, both knees can be done in one anaesthesia (bilateral TKR) — one hospital stay and one recovery period. Your cardiac and general fitness are assessed first." },
      { q: "How soon can I sit cross-legged or use Indian toilets?", a: "High-flexion implant designs and robotic alignment allow many patients to regain deep bending. This depends on your pre-operative flexibility and is discussed honestly during planning." },
      { q: "What is the cost of robotic knee replacement in Thane/Mumbai?", a: "Cost depends on implant brand, whether one or both knees are done, robotic system used, hospital tier and room category — there is no single fixed price. A detailed, written estimate is given after your consultation. See our full cost guide for indicative ranges and what drives them." },
      { q: "Is knee replacement covered by insurance/Mediclaim?", a: "Most health insurance and Mediclaim policies in India cover knee replacement, including cashless treatment at network hospitals, subject to your policy terms and any waiting period for joint conditions. Bring your policy details to the consultation for a clear answer specific to your plan." },
      { q: "Is robotic knee replacement better than traditional, and is it worth the extra cost?", a: "Robotic assistance improves implant alignment accuracy and can mean less soft-tissue trauma, but it is one factor among several — surgeon experience matters most either way. See our honest robotic vs. traditional comparison for a side-by-side look, including who it does and doesn't suit." }
    ]
  },
  {
    slug: "hip-replacement",
    name: "Total Hip Replacement",
    group: "Joint Replacement",
    featured: true,
    keywordTitle: "Hip Replacement Surgeon in Thane",
    metaDescription: "Total hip replacement in Thane by Dr. Niranjan Ghag — fellowship-trained hip & joint replacement surgeon. Walk within 24 hours, modern implants lasting 20–25+ years. Khopat, Thane West, opp. Viviana Mall.",
    image: "/images/joint-replacement.jpg",
    hero: "One of the most successful operations in all of medicine — reliable pain relief and restored independence.",
    specialty: "joint-replacement",
    relatedArticles: [
      { slug: "hip-replacement-signs", title: "Signs you may need hip replacement" },
      { slug: "joint-replacement-insurance-india", title: "Is joint replacement covered by insurance?" }
    ],
    sections: [
      {
        heading: "Do you actually need a hip replacement?",
        body: "Hip arthritis is a master of disguise — it often presents as groin strain, thigh pain or even knee pain. Surgery is considered when:",
        bullets: [
          "Groin or thigh pain limits walking and disturbs sleep",
          "Stiffness makes wearing socks, cutting toenails or sitting cross-legged difficult",
          "X-ray confirms advanced arthritis or avascular necrosis (AVN)",
          "Medication and physiotherapy no longer control the pain"
        ]
      },
      {
        heading: "What modern hip replacement looks like",
        body: "The worn ball-and-socket joint is replaced with smooth, durable implants through a tissue-sparing approach. Most patients stand and walk within 24 hours, climb stairs within a week, and return to independent daily life within 4–6 weeks. Modern ceramic and highly cross-linked polyethylene bearings are expected to last 20–25 years or more — which is why hip replacement is now routinely offered to younger patients with AVN."
      },
      {
        heading: "Why timing matters",
        body: "Waiting too long weakens hip muscles, shortens the limb, and worsens bone quality — making surgery technically harder and rehabilitation slower. If pain has changed how you walk or what you can do, an evaluation with a standing X-ray gives you clear answers; surgery remains your decision."
      }
    ],
    faqs: [
      { q: "How long will the implant last?", a: "Modern bearing surfaces are expected to last 20–25 years or longer. Registry data shows over 90% of hip replacements still functioning well at 15 years." },
      { q: "What is AVN and why do younger patients need hip replacement?", a: "Avascular necrosis is loss of blood supply to the femoral head, common in 30s–40s, often after steroid use or alcohol excess. Early stages can be treated with preservation procedures; advanced collapse needs replacement — with excellent results." },
      { q: "Will I be able to sit on the floor afterwards?", a: "With modern implants and surgical techniques, many patients regain floor-sitting. It depends on implant type and your anatomy — this is discussed honestly before surgery." },
      { q: "How soon can I return to work?", a: "Desk work: typically 3–4 weeks. Standing or field work: 6–10 weeks depending on demands. Driving usually resumes around 4–6 weeks." },
      { q: "What is the cost of hip replacement in India?", a: "Cost varies with implant material (metal, ceramic or highly cross-linked polyethylene), single vs. bilateral surgery, hospital tier and room category — government and private hospital pricing also differs significantly. You will get a clear, written estimate before deciding anything." },
      { q: "Is hip replacement covered by Mediclaim/health insurance?", a: "Yes, in most cases — hip replacement is a standard inclusion in Indian health insurance policies, often available cashless at network hospitals. Pre-existing-condition waiting periods can apply, so it is worth checking your specific policy. See our insurance guide for the documents and process typically involved." }
    ]
  },
  {
    slug: "robotic-vs-traditional-knee-replacement",
    name: "Robotic vs. Traditional Knee Replacement",
    group: "Joint Replacement",
    featured: false,
    keywordTitle: "Robotic vs Traditional Knee Replacement — Honest Comparison | Thane",
    metaDescription: "Robotic vs traditional knee replacement compared honestly by Dr. Niranjan Ghag — accuracy, recovery, cost and who is (and isn't) a good candidate for robotic surgery. Khopat, Thane West.",
    image: "/images/joint-replacement.jpg",
    hero: "An honest, side-by-side comparison — not a sales pitch for either option.",
    specialty: "joint-replacement",
    relatedArticles: [
      { slug: "robotic-knee-replacement-cost-thane", title: "Robotic knee replacement cost in Thane & Mumbai" },
      { slug: "knee-arthritis-treatment-without-surgery", title: "Knee arthritis treatment without surgery" }
    ],
    sections: [
      {
        heading: "Side by side",
        bullets: [
          "Alignment accuracy: Robotic — accurate to fractions of a millimetre against a pre-built 3D plan. Traditional — relies on the surgeon's manual instrumentation and experience, which is excellent in skilled hands but has more natural variability",
          "Soft-tissue handling: Robotic — typically less soft-tissue trauma since cuts are guided precisely. Traditional — slightly more reliant on jigs that can disturb surrounding tissue",
          "Recovery speed: Robotic — many patients report quicker early mobilisation. Traditional — recovery is still good, just on average a touch slower in the first few weeks for some patients",
          "Cost: Robotic — approximately ₹2.5–3 lakh per knee, due to the technology usage fee. Traditional — approximately ₹1.5–2 lakh per knee depending on the implant chosen, and a well-established, time-tested option. We quote both honestly so you can weigh the difference against your own priorities",
          "Long-term outcome: Both achieve excellent, durable results (implants lasting 20–25+ years) in the hands of an experienced joint replacement surgeon — the surgeon's skill matters more than the tool"
        ]
      },
      {
        heading: "Image-based vs. imageless robotic systems",
        body: "Robotic knee replacement itself comes in two main forms, and the choice affects both planning and cost. Image-based systems use a CT scan taken before surgery to build a precise 3D plan, which adds the cost of that scan. Imageless systems map your knee in real time during the operation using surface and motion tracking, skipping the pre-op CT scan and its cost while still achieving robotic-level alignment accuracy for the great majority of knees. We recommend whichever genuinely suits your case — not the one that costs more."
      },
      {
        heading: "Disadvantages of robotic knee replacement — the honest version",
        bullets: [
          "Higher cost than conventional surgery",
          "Slightly longer operative time in some cases, due to the additional planning and registration steps",
          "Requires specific equipment and surgeon training — not available everywhere",
          "For straightforward, well-aligned knees in experienced hands, the outcome difference versus traditional surgery can be modest"
        ]
      },
      {
        heading: "Who is not a good candidate for robotic knee replacement?",
        body: "Robotic assistance is not strictly necessary for every patient. Some prior knee implants, certain hardware from old fractures, or specific anatomical factors can make a conventional approach more practical in a minority of cases. This is assessed individually — it is not a reason to avoid evaluation, simply a factor in planning the right approach for your knee."
      },
      {
        heading: "Our honest recommendation",
        body: "Robotic-assisted surgery is our preferred approach for most knee replacements because of the alignment precision it offers, but it is a tool, not a guarantee — surgical experience and post-operative rehabilitation remain the biggest drivers of outcome either way. We discuss both options plainly for your specific knee rather than defaulting to whichever is most profitable to offer."
      }
    ],
    faqs: [
      { q: "Is robotic knee replacement actually better than traditional?", a: 'It offers more consistent alignment accuracy and, in many studies, less soft-tissue trauma — but both approaches achieve excellent, durable outcomes in experienced hands. "Better" depends partly on your specific knee.' },
      { q: "Is the extra cost of robotic surgery worth it?", a: "Robotic is approximately ₹2.5–3 lakh and traditional approximately ₹1.5–2 lakh per knee, so the gap is real. For complex deformities or revision cases, the added precision can be genuinely valuable. For straightforward knees, traditional surgery often gives an equally good outcome for less — we will tell you plainly which applies to your knee rather than upselling." },
      { q: "Can I reduce the cost without compromising the outcome?", a: "Often, yes — choosing an imageless robotic system (no separate CT scan charge) or a well-established domestic implant brand can meaningfully lower the bill without affecting how well the surgery goes. We discuss these trade-offs openly at consultation." },
      { q: "Can every patient choose robotic surgery?", a: "Almost all patients are candidates, but a small number with specific prior hardware or anatomical factors may be better suited to a conventional approach — assessed individually at consultation." }
    ]
  },
  {
    slug: "knee-pain",
    name: "Knee Pain Treatment",
    group: "Joint Replacement",
    featured: false,
    keywordTitle: "Knee Pain Doctor in Thane | Ghutne Dard Ka Ilaj — गुडघेदुखी",
    metaDescription: "Knee pain specialist in Thane — Dr. Niranjan Ghag diagnoses and treats ghutne dard (गुडघेदुखी): arthritis, meniscus tears, ligament injuries. Accurate diagnosis, X-ray on the day, clear treatment plan. Khopat, Thane West.",
    image: "/images/joint-replacement.jpg",
    hero: "Ghutne dard (गुडघेदुखी) — knee pain — has many causes. The right treatment starts with the right diagnosis.",
    specialty: "joint-replacement",
    relatedArticles: [
      { slug: "early-signs-knee-arthritis", title: "Early signs of knee arthritis" },
      { slug: "robotic-knee-replacement-recovery", title: "When knee replacement is the answer" }
    ],
    sections: [
      {
        heading: "What is causing your ghutne dard (knee pain)?",
        body: "Ghutne dard (गुडघेदुखी / घुटने का दर्द) is among the most common reasons patients visit an orthopaedic surgeon. Common diagnoses include:",
        bullets: [
          "Osteoarthritis — cartilage wears away over time; most common in adults over 45",
          "Meniscus tear — the shock-absorbing cartilage; common from twisting movements",
          "Ligament injury — ACL, PCL or MCL sprain or rupture from sudden impact",
          "Patellofemoral pain — around the kneecap; common in younger patients and runners",
          "Tendinitis — patellar or quadriceps tendon inflammation from overuse",
          "Bursitis — swelling of the fluid sacs around the knee after a fall or prolonged kneeling"
        ]
      },
      {
        heading: "How we diagnose your knee pain",
        body: "A standing X-ray (weight-bearing) is essential — it shows the actual gap between bones and grades arthritis accurately. MRI is added when soft-tissue injury is suspected. You leave the consultation knowing exactly what is happening and what the options are."
      },
      {
        heading: "Treatment options — from least to most invasive",
        bullets: [
          "Physiotherapy and exercise — the foundation for most knee problems; often underused",
          "Medications — anti-inflammatories, supplements; realistic expectations set upfront",
          "Injections — corticosteroid for inflammation, hyaluronic acid for arthritis, PRP selectively",
          "Arthroscopy — keyhole surgery to clean, repair or reconstruct inside the knee",
          "Knee replacement — only when arthritis is advanced and all other treatments have failed"
        ]
      }
    ],
    faqs: [
      { q: "My knee clicks and grinds — is that serious?", a: "Clicking and crepitus (grinding) are common and usually harmless if there is no pain, swelling or locking. Clicking with pain or swelling needs investigation." },
      { q: "Can exercise make knee arthritis worse?", a: "The right exercise actually protects the knee — it strengthens the muscles that take load off the joint. Walking, cycling and swimming are well tolerated and encouraged." },
      { q: "Are knee injections effective?", a: "Corticosteroid injections provide significant short-term relief (4–12 weeks) for inflamed arthritic knees. Hyaluronic acid has more modest evidence. PRP is used selectively where evidence supports it." },
      { q: "When should I see a doctor for knee pain?", a: "Immediately: if the knee is severely swollen, very hot, or locked. Soon: if pain limits your walking, work, or sleep for more than 2–3 weeks despite rest." }
    ]
  },
  {
    slug: "joint-pain",
    name: "Joint Pain Treatment",
    group: "Joint Replacement",
    featured: true,
    keywordTitle: "Joint Pain Specialist in Thane | Sandhe Dukhi Upchar — सांधेदुखी",
    metaDescription: "Joint pain specialist in Thane — Dr. Niranjan Ghag treats sandhe dukhi (सांधेदुखी), jodo ka dard (जोड़ों का दर्द): knee, hip, shoulder and ankle joint pain. Accurate diagnosis, modern treatment. Khopat, Thane West opp. Viviana Mall.",
    image: "/images/joint-replacement.jpg",
    hero: "Sandhe dukhi (सांधेदुखी) — joint pain — is not something you should just live with. Most causes have effective treatments.",
    specialty: "joint-replacement",
    relatedArticles: [
      { slug: "early-signs-knee-arthritis", title: "Early signs of knee arthritis" },
      { slug: "hip-replacement-signs", title: "Signs you may need hip replacement" }
    ],
    sections: [
      {
        heading: "Sandhe dukhi — what is causing your joint pain?",
        body: "Joint pain (sandhe dukhi / सांधेदुखी / जोड़ों का दर्द / gude dukhne) can affect any joint. The cause determines the treatment entirely:",
        bullets: [
          "Osteoarthritis (ghasa ghasi / घसाघसी) — cartilage worn with age; most common in knees, hips and fingers",
          "Rheumatoid arthritis — immune system attacking joints; morning stiffness, multiple joints",
          "Gout (vaat / वात) — uric acid crystals in the joint; sudden severe pain often in big toe or ankle",
          "Post-injury arthritis — a joint injured years ago now developing arthritis",
          "Avascular necrosis (AVN) — bone dies due to lost blood supply; common in the hip",
          "Ligament or cartilage tears — from sports or accidents"
        ]
      },
      {
        heading: "When to see an orthopaedic surgeon",
        body: "Come in when:",
        bullets: [
          "Pain has lasted more than 3–4 weeks and is not improving",
          "The joint is swollen, warm or red",
          "Pain is disturbing your sleep",
          "You are limping or avoiding activities because of the joint",
          "Pain medication is giving less and less relief"
        ]
      },
      {
        heading: "Treatment — what you can expect",
        body: "Most joint pain is treated without surgery. A clear diagnosis comes first — standing X-ray, blood tests if inflammatory arthritis is suspected, MRI if a soft-tissue cause is likely. Treatment follows a stepwise approach: exercises and physiotherapy, appropriate medication, targeted injections, and surgery only when conservative treatment has genuinely failed."
      }
    ],
    faqs: [
      { q: "Sandhe dukhi — should I take calcium and vitamin D?", a: "Calcium and vitamin D support bone density but do not treat joint pain from arthritis or cartilage damage. They are useful supplements but not a substitute for diagnosis and specific treatment." },
      { q: "Is sandhe dukhi (joint pain) curable?", a: "It depends on the cause. Gout and inflammatory arthritis can be well controlled with medication. Osteoarthritis cannot be reversed, but pain is manageable and joint replacement reliably relieves it when advanced." },
      { q: "Can joint pain be treated without surgery?", a: "Yes, in most cases — physiotherapy, weight management, targeted injections and appropriate medication control pain for years. Surgery is reserved for advanced disease where these measures no longer work." },
      { q: "Which joint pain requires urgent attention?", a: "A hot, red, very swollen joint with fever could indicate a joint infection (septic arthritis) — this is an emergency that needs same-day evaluation." }
    ]
  },
  // ── TRAUMA & FRACTURE ────────────────────────────────────────────────────
  {
    slug: "trauma-surgery",
    name: "Advanced Trauma & Fracture Surgery",
    group: "Trauma & Fracture",
    featured: true,
    keywordTitle: "Trauma Surgeon in Thane | Fracture Treatment Specialist",
    metaDescription: "Advanced trauma and fracture surgery in Thane by Dr. Niranjan Ghag — humerus, femur, tibia, fibula, clavicle, ankle, foot, pelvis fractures. Road accident injuries, complex fractures, polytrauma. Joshi's Neurotrauma Centre, Khopat, Thane West.",
    image: "/images/trauma-fracture.jpg",
    hero: "When bones break, precision matters — expert fixation to restore strength, alignment and function.",
    specialty: "trauma-fracture",
    relatedArticles: [
      { slug: "fracture-healing-surgery", title: "How fractures heal — and when surgery is needed" }
    ],
    sections: [
      {
        heading: "Fractures we treat — every bone, every age",
        body: "Our orthopaedic trauma service covers the full spectrum of fractures across the body:",
        bullets: [
          "Upper limb: clavicle (collar bone), humerus (upper arm), forearm (radius & ulna), wrist, hand & finger fractures",
          "Lower limb: femur (thigh bone), tibia & fibula (leg), ankle (bimalleolar, trimalleolar), foot & toe fractures",
          "Pelvis & acetabulum: complex pelvic fractures from high-energy trauma",
          "Spine fractures: vertebral compression fractures, burst fractures (see Spine Surgery page)",
          "Road accident injuries — single or multiple bones; assessed and managed as a whole",
          "Open (compound) fractures — bone piercing skin; emergency surgery within hours",
          "Fracture non-union — bones that have failed to heal after prior treatment",
          "Mal-union correction — re-aligning a bone that healed in the wrong position"
        ]
      },
      {
        heading: "Surgical techniques used",
        bullets: [
          "Intramedullary nailing — a rod inside the bone canal; used for femur, tibia, humerus fractures",
          "Plate and screw fixation — for periarticular fractures, forearm, clavicle, ankle",
          "Minimally invasive percutaneous osteosynthesis (MIPO) — smaller incisions, faster healing",
          "External fixation — temporary stabilisation in open or contaminated fractures",
          "Bone grafting — for non-union and bone loss",
          "Locked plating — for osteoporotic and comminuted fractures"
        ]
      },
      {
        heading: "Recovery and rehabilitation",
        body: "Recovery depends on which bone is broken and how it is fixed. Most patients move (though not always weight-bear) within 24–48 hours of surgery. Physiotherapy starts early to prevent stiffness. Upper-limb fractures: desk work typically at 4–6 weeks. Lower-limb: weight-bearing resumes based on X-ray evidence of healing, usually 6–12 weeks."
      }
    ],
    faqs: [
      { q: "Does every fracture need surgery?", a: "No. Many fractures heal in a cast or splint. Surgery is recommended when the fracture is displaced, unstable, near a joint, involves the forearm or ankle, or when a cast cannot maintain alignment — the final decision is made after viewing the X-ray." },
      { q: "My femur (thigh bone) was broken in a road accident — what happens?", a: "Femur fractures in adults are almost always fixed surgically with an intramedullary nail — a titanium rod passed down the centre of the bone. Surgery is done within 24–48 hours when the patient is stable. Most patients sit up the next day and begin walking with support within a week." },
      { q: "What is a non-union fracture?", a: "A fracture that has not healed after the expected time (usually 6 months) is called a non-union. Causes include poor blood supply, infection, inadequate fixation or smoking. Treatment involves bone grafting and new fixation — with good outcomes." },
      { q: "Will the implant (plate/nail) need to be removed later?", a: "Modern implants are well tolerated and many patients keep them permanently. Removal is offered if the implant causes discomfort or at patient request, usually 12–18 months after confirmed healing." }
    ]
  },
  {
    slug: "fracture-treatment",
    name: "Bone Fracture Treatment",
    group: "Trauma & Fracture",
    featured: false,
    keywordTitle: "Fracture Treatment in Thane | Broken Bone Specialist — Haddi Tootna",
    metaDescription: "Expert fracture treatment in Thane — haddi tootna (हाडी तुटणे / हड्डी टूटना), all bones treated by Dr. Niranjan Ghag. Humerus, femur, tibia, fibula, forearm, wrist, clavicle, ankle, foot fractures. Khopat, Thane West.",
    image: "/images/trauma-fracture.jpg",
    hero: "Haddi tootna (हाडी तुटणे) — whether simple or complex, every fracture deserves the right treatment from the start.",
    specialty: "trauma-fracture",
    relatedArticles: [
      { slug: "fracture-healing-surgery", title: "How fractures heal — and when surgery is needed" }
    ],
    sections: [
      {
        heading: "Fracture treatment — cast or surgery?",
        body: "Most patients want to know: will I need an operation? The answer depends on the fracture pattern:",
        bullets: [
          "Cast treatment: undisplaced (not shifted) fractures of the wrist, foot, clavicle and ribs heal well without surgery",
          "Surgery needed: displaced fractures, fractures near joints, both-bone forearm fractures, most ankle fractures, all femur and tibia fractures in adults",
          "The deciding factor: will the bone heal in a correct position with a cast? If not, surgery is safer and gives a better result"
        ]
      },
      {
        heading: "Common fractures by bone",
        bullets: [
          "Clavicle (collar bone) — very common; most heal in a sling; displaced mid-shaft and outer end fractures do better with a plate",
          "Humerus (upper arm) — proximal fractures (near shoulder) often treated in a sling; shaft and distal fractures usually need plating or nailing",
          "Radius & ulna (forearm) — displaced adult forearm fractures almost always need plate fixation",
          "Femur (thigh) — all adult femur fractures need a nail or plate; surgery within 24–48 hours",
          "Tibia & fibula (leg) — tibial shaft nailing; ankle fractures fixed with plates and screws",
          "Foot fractures — calcaneus (heel), metatarsal, toe fractures; many managed without surgery, displaced ones fixed"
        ]
      },
      {
        heading: "Emergency fractures — what to do",
        bullets: [
          "Do not move the limb; support it in the position found",
          "Cover an open wound with a clean cloth; do not push bone back",
          "Go to the nearest accident and emergency — or call us directly",
          "Bring any previous X-rays and medical reports"
        ]
      }
    ],
    faqs: [
      { q: "How long does a fracture take to heal?", a: "Small bones (fingers, toes): 3–4 weeks. Forearm and wrist: 6–8 weeks. Tibia (leg): 10–16 weeks. Femur (thigh): 12–16 weeks. Healing time depends on age, bone quality, nutrition and whether the fracture was fixed surgically or in a cast." },
      { q: "My child fell and their arm is swollen but the X-ray looks normal — could it be broken?", a: 'Yes — children have growth plates at the ends of bones that look like "gaps" on X-ray and can be confused with fractures, or fractures in growth plates can be missed. If there is significant swelling and tenderness, treat as a fracture. A repeat X-ray in 7–10 days or an MRI clarifies the diagnosis.' },
      { q: "Can I travel with a fracture?", a: "Short distances are usually fine once the fracture is stabilised. Long flights with a lower-limb fracture carry a blood clot risk — discuss with your surgeon before travel." }
    ]
  },
  {
    slug: "hand-wrist-surgery",
    name: "Hand & Wrist Surgery",
    group: "Trauma & Fracture",
    featured: false,
    keywordTitle: "Hand Surgeon in Thane | Wrist & Hand Surgery Specialist",
    metaDescription: "Hand and wrist surgery in Thane by Dr. Niranjan Ghag — wrist fractures, finger fractures, tendon injuries, trigger finger, carpal tunnel syndrome. Expert orthopaedic hand care at Khopat, Thane West opp. Viviana Mall.",
    image: "/images/trauma-fracture.jpg",
    hero: "Your hands do everything — precise surgery and early rehabilitation restore what an injury takes away.",
    specialty: "trauma-fracture",
    relatedArticles: [
      { slug: "fracture-healing-surgery", title: "How fractures heal — and when surgery is needed" }
    ],
    sections: [
      {
        heading: "Conditions treated",
        bullets: [
          "Wrist fractures — distal radius, scaphoid, perilunate dislocations",
          "Metacarpal and finger fractures — boxing fractures, crush injuries, sports injuries",
          "Tendon injuries — flexor and extensor tendon cuts requiring prompt repair",
          "Trigger finger (stenosing tenosynovitis) — finger locking or clicking in a bent position",
          "De Quervain's tenosynovitis — pain on the thumb side of the wrist with gripping",
          "Carpal tunnel syndrome — numbness, tingling and weakness from median nerve compression",
          "Mallet finger — fingertip droop after tendon avulsion injury",
          "Ganglion cysts — fluid-filled lumps around the wrist or finger joints"
        ]
      },
      {
        heading: "Trigger finger and De Quervain's — common, treatable",
        body: "Trigger finger causes a finger to lock or snap when bending — very common in people who grip repeatedly (drivers, housewives, mechanics). Most respond to a single steroid injection; persistent cases need a small day-care release procedure. De Quervain's causes pain at the base of the thumb wrist with pinching or gripping — treated with splinting, injection or surgical release with excellent results."
      },
      {
        heading: "Carpal tunnel syndrome",
        body: "Carpal tunnel syndrome causes numbness, tingling and weakness in the thumb, index and middle fingers — often worst at night or when driving. It is the most common nerve compression condition in the upper limb. Mild cases: night splint and injections. Moderate–severe: a 15-minute day-care carpal tunnel release gives immediate lasting relief."
      }
    ],
    faqs: [
      { q: "I have numbness in my fingers at night — what is it?", a: "Night-time numbness in the first three fingers (thumb, index, middle) is the classic presentation of carpal tunnel syndrome. A nerve conduction study confirms the diagnosis. Treatment ranges from a night splint to a simple surgical release." },
      { q: "My finger keeps getting stuck in a bent position — what is wrong?", a: "This is trigger finger — the tendon catches on a thickened pulley sheath. A single injection resolves it in 60–70% of cases. If it returns, a day-care surgical release gives a permanent cure." },
      { q: "How long after a tendon cut should surgery be done?", a: "Flexor tendon repairs are best done within 12–24 hours of injury. Seeking emergency care promptly gives the best outcomes." }
    ]
  },
  // ── FOOT & ANKLE ─────────────────────────────────────────────────────────
  {
    slug: "foot-ankle-surgery",
    name: "Foot & Ankle Surgery",
    group: "Foot & Ankle",
    featured: true,
    keywordTitle: "Foot & Ankle Surgeon in Thane | Foot Pain Specialist",
    metaDescription: "Foot and ankle surgery in Thane by Dr. Niranjan Ghag — ankle fractures, flat foot, bunion (hallux valgus), Achilles tendon, ankle arthritis, diabetic foot. Expert orthopaedic care at Khopat, Thane West opp. Viviana Mall.",
    image: "/images/foot-ankle.jpg",
    hero: "Foot and ankle problems affect every step — and most have excellent treatment options.",
    specialty: "foot-ankle",
    relatedArticles: [
      { slug: "heel-pain-plantar-fasciitis", title: "Heel pain — causes and treatment" },
      { slug: "ankle-sprain-vs-fracture", title: "Ankle sprain vs fracture — how to tell the difference" }
    ],
    sections: [
      {
        heading: "Conditions we treat",
        bullets: [
          "Ankle fractures — bimalleolar, trimalleolar, Maisonneuve; most displaced fractures need surgical fixation",
          "Ankle instability — chronic giving-way after repeated sprains; treated with ligament reconstruction",
          'Achilles tendon rupture — sudden "snap" in the back of the leg; surgery returns athletes faster',
          "Flat foot (pes planus) — symptomatic flat foot with pain, especially in children and young adults",
          "Bunion (hallux valgus) — painful bump at the base of the big toe; corrected surgically when symptomatic",
          "Hammer toes — curled toes causing shoe pressure and pain",
          "Ankle arthritis — end-stage treated with ankle fusion or replacement",
          "Diabetic foot — Charcot arthropathy, chronic ulcers, infection management"
        ]
      },
      {
        heading: "Ankle fracture — why surgery usually wins",
        body: "Most displaced ankle fractures heal better with surgical fixation than in a cast. Precise reduction and fixation allows earlier movement, better alignment, and significantly lower risk of long-term ankle arthritis. A cast-treated displaced ankle fracture that heals even slightly crooked often leads to chronic pain within 5–10 years."
      },
      {
        heading: "Achilles tendon rupture",
        body: "The Achilles is the strongest tendon in the body — but when it ruptures (usually during a sudden sprint or jump), it is debilitating. Surgical repair stitches the tendon ends together, restoring full push-off strength. Most patients return to recreational sport by 6 months. Non-surgical treatment in a boot is an option for sedentary patients."
      }
    ],
    faqs: [
      { q: "My ankle still hurts months after a sprain — is that normal?", a: "A simple sprain should feel much better within 4–6 weeks. Persistent pain beyond that suggests either a missed fracture, ligament instability, peroneal tendon injury or cartilage damage inside the ankle — all detectable on MRI." },
      { q: "What is the recovery after ankle surgery?", a: "For most ankle fractures: non-weight-bearing for 6 weeks, then graduated weight-bearing with physiotherapy. Most patients walk normally by 3–4 months." },
      { q: "My child has flat feet — does it need treatment?", a: "Most children under 8 have flat feet that resolve naturally. Symptomatic flat feet with pain, or flat feet that persist beyond age 8–10 without improvement, should be assessed. Insoles usually help; surgery is rarely needed in children." }
    ]
  },
  {
    slug: "heel-pain",
    name: "Heel Pain & Plantar Fasciitis Treatment",
    group: "Foot & Ankle",
    featured: false,
    keywordTitle: "Heel Pain Treatment in Thane | Plantar Fasciitis | Tacchi Dard — टाच दुखणे",
    metaDescription: "Heel pain and plantar fasciitis treatment in Thane — tacchi dard (टाच दुखणे), heel spur, Achilles tendinitis treated by Dr. Niranjan Ghag. Non-surgical first-line treatment, injections, surgery when needed. Khopat, Thane West.",
    image: "/images/foot-ankle.jpg",
    hero: "That sharp pain in your heel with the first steps of the morning — treatable in most cases without surgery.",
    specialty: "foot-ankle",
    relatedArticles: [
      { slug: "heel-pain-plantar-fasciitis", title: "Complete guide to heel pain and plantar fasciitis" }
    ],
    sections: [
      {
        heading: "What is causing your tacchi dard (heel pain)?",
        body: "Tacchi dard (टाच दुखणे / heel pain) is one of the most common orthopaedic complaints. The most frequent cause is plantar fasciitis, but others include:",
        bullets: [
          "Plantar fasciitis — inflammation of the thick band from heel to toes; sharp pain with first morning steps",
          "Heel spur (calcaneal spur) — a bony growth on the underside of the heel bone; often coexists with plantar fasciitis",
          "Achilles tendinitis — pain at the back of the heel; common in runners and people who are on their feet all day",
          "Fat pad atrophy — cushioning fat under the heel thins with age; common in older patients",
          "Stress fracture of the calcaneus — uncommon but important to exclude in athletes and after long runs"
        ]
      },
      {
        heading: "Treatment — most cases resolve without surgery",
        bullets: [
          "Stretching — calf and plantar fascia stretches; the most effective treatment when done consistently",
          "Supportive footwear and insoles — heel cups, arch support; avoid walking barefoot on hard floors",
          "Night splint — keeps the plantar fascia stretched while sleeping",
          "Corticosteroid injection — targeted relief for persistent cases; significant improvement in most",
          "Shockwave therapy — for chronic cases not responding after 3–6 months",
          "Surgery — plantar fascia release; reserved for the small number who fail all non-surgical treatment"
        ]
      }
    ],
    faqs: [
      { q: "How long does plantar fasciitis take to heal?", a: "With consistent stretching and appropriate footwear, 80% of patients are significantly better within 6–12 months. An injection can accelerate this considerably. Surgery is a last resort for the 5–10% who do not respond." },
      { q: "Does a heel spur always need surgery?", a: "Almost never. The spur itself is rarely the source of pain — the plantar fascia inflammation is. Treating the inflammation resolves the pain without touching the spur." },
      { q: "My heel pain is worst in the morning — why?", a: 'The plantar fascia tightens during sleep. The first steps suddenly stretch it, causing pain. This "first-step pain" that eases after a few minutes is the classic presentation of plantar fasciitis.' }
    ]
  },
  // ── SPORTS MEDICINE ──────────────────────────────────────────────────────
  {
    slug: "acl-reconstruction",
    name: "ACL Reconstruction",
    group: "Sports Medicine",
    featured: true,
    keywordTitle: "ACL Reconstruction Surgeon in Thane",
    metaDescription: "Arthroscopic ACL reconstruction in Thane by Dr. Niranjan Ghag — sports medicine fellowship-trained surgeon. Keyhole surgery, same-day walking, structured return-to-sport protocol. Khopat, Thane West.",
    image: "/images/sports-arthroscopy.jpg",
    hero: "Keyhole ligament reconstruction with a criteria-based path back to the sport you love.",
    specialty: "sports-arthroscopy",
    relatedArticles: [
      { slug: "acl-tear-symptoms-treatment", title: "ACL tear — symptoms and treatment" },
      { slug: "acl-surgery-recovery-timeline", title: "ACL surgery recovery, week by week" }
    ],
    sections: [
      {
        heading: "Do all ACL tears need surgery?",
        body: "No — and a surgeon who says otherwise is not being straight with you. The decision depends on your knee and your life:",
        bullets: [
          "Physiotherapy alone can work for low-demand patients with stable knees",
          "Reconstruction is recommended for athletes, active patients, and anyone whose knee gives way repeatedly",
          "Delaying surgery in an unstable knee risks meniscus and cartilage damage — the real long-term cost"
        ]
      },
      {
        heading: "How the surgery works",
        body: "ACL reconstruction is done arthroscopically — through keyhole incisions with a camera. The torn ligament is replaced with a graft (commonly hamstring or peroneus tendon; graft choice is matched to your sport and anatomy). Meniscus tears found during surgery are repaired in the same sitting. Most patients walk the same or next day and go home within 24 hours."
      },
      {
        heading: "Return to sport: the honest timeline",
        bullets: [
          "Week 0–2: walking with support, gentle range-of-motion exercises",
          "Week 2–6: full weight-bearing, stationary cycling, strengthening",
          "Month 3: straight-line jogging",
          "Month 6: sport-specific drills after strength testing",
          "Month 8–12: full competitive return once hop and strength tests pass — rushing this is the main cause of re-tears"
        ]
      }
    ],
    faqs: [
      { q: "What happens if I just leave my ACL tear?", a: "Some knees cope; many give way during twisting movements. Each giving-way episode risks tearing the meniscus and damaging cartilage, accelerating arthritis. If your knee feels unstable, early assessment protects its future." },
      { q: "Which graft is best?", a: "There is no single best graft — hamstring, patellar tendon and quadriceps grafts each have trade-offs in strength, harvest pain and re-rupture rates. The choice is matched to your sport, age and anatomy." },
      { q: "How long is the hospital stay?", a: "ACL reconstruction is typically a day-care or one-night procedure. You walk with support before discharge and start physiotherapy immediately." },
      { q: "Will my knee be as good as before?", a: "With a well-done reconstruction and completed rehabilitation, most athletes return to their previous level. Compliance with the full physiotherapy protocol is the biggest factor — more than the surgery itself." },
      { q: "ACL repair or ACL reconstruction — what is the difference?", a: "Repair stitches the torn ligament back together and is only suitable for select, very fresh tears with good tissue quality. Reconstruction replaces the ligament with a graft and is the standard, more reliable option for most ACL tears, especially in athletes. Which one applies to you is assessed on MRI and at arthroscopy." }
    ]
  },
  {
    slug: "sports-injuries",
    name: "Sports Injuries Treatment",
    group: "Sports Medicine",
    featured: false,
    keywordTitle: "Sports Injury Doctor in Thane | Sports Medicine Specialist",
    metaDescription: "Sports injuries specialist in Thane — Dr. Niranjan Ghag treats ACL tears, meniscus injuries, shoulder dislocations, muscle tears, ankle sprains and all sports trauma. Khel mein chot (खेळातील दुखापत). Khopat, Thane West.",
    image: "/images/sports-arthroscopy.jpg",
    hero: "From cricket to kabaddi, football to the gym — sports injuries deserve specialist care to get you back fully.",
    specialty: "sports-arthroscopy",
    relatedArticles: [
      { slug: "acl-tear-symptoms-treatment", title: "ACL tear — symptoms and treatment" },
      { slug: "ankle-sprain-vs-fracture", title: "Ankle sprain vs fracture" }
    ],
    sections: [
      {
        heading: "Common sports injuries we treat",
        bullets: [
          "Knee: ACL tear, PCL tear, meniscus tear, patellar dislocation, MCL sprain",
          "Shoulder: dislocation, rotator cuff tear, SLAP labral tear, AC joint injury",
          "Ankle: sprains (ligament tear), peroneal tendon injury, osteochondral lesion",
          "Muscle injuries: hamstring tear, quadriceps tear, calf muscle strain",
          "Bone stress: stress fractures in runners, cricketers and long-distance walkers",
          "Overuse: patellar tendinitis (jumper's knee), shin splints, tennis/golfer's elbow"
        ]
      },
      {
        heading: "The sports medicine approach",
        body: "Sports medicine is not just about surgery. The goal is returning you to sport at the same level — safely and sustainably. Accurate diagnosis first (clinical examination + MRI when needed), followed by the minimum intervention that achieves a full recovery. Most sports injuries are managed without surgery through structured rehabilitation and targeted injections."
      },
      {
        heading: "When surgery is the right answer",
        bullets: [
          "Complete ligament ruptures causing instability — ACL, shoulder dislocation",
          "Meniscus tears that are repairable — early repair preserves the meniscus and prevents arthritis",
          "Shoulder labral tears causing repeated dislocation (Bankart repair)",
          "Fractures sustained during sport",
          "Rotator cuff tears causing significant weakness not responding to 3+ months of physiotherapy"
        ]
      }
    ],
    faqs: [
      { q: "I sprained my ankle playing cricket — do I need an X-ray?", a: "If you cannot weight-bear at all, or there is bone tenderness over specific points, an X-ray is needed to rule out a fracture. Pure ligament sprains without those signs can be treated with RICE initially." },
      { q: "My shoulder dislocated playing kabaddi — will it happen again?", a: "First-time dislocation in a young athlete under 25 has a re-dislocation rate of 70–90% without surgery. Arthroscopic Bankart repair reduces this to under 5%. For older first-time dislocators, physiotherapy alone gives acceptable results." },
      { q: "Can PRP treat my sports injury?", a: "PRP has proven benefit in certain tendinopathies and in augmenting meniscus repairs. It is used selectively where evidence supports it — not as a blanket treatment for all sports injuries." },
      { q: "How soon can I return to sport after a muscle tear?", a: "Grade 1 strains: 1–2 weeks. Grade 2 (partial tear): 3–8 weeks. Grade 3 (complete rupture): surgery may be needed, followed by 3–6 months of rehabilitation. Returning before full strength recovery is the main cause of re-injury." }
    ]
  },
  {
    slug: "keyhole-surgery",
    name: "Arthroscopic (Keyhole) Surgery",
    group: "Sports Medicine",
    featured: false,
    keywordTitle: "Arthroscopy Surgeon in Thane | Keyhole Surgery for Knee & Shoulder",
    metaDescription: "Arthroscopic keyhole surgery in Thane — knee arthroscopy, shoulder arthroscopy, ACL reconstruction, meniscus repair by Dr. Niranjan Ghag. Day-care procedures, smaller incisions, faster recovery. Khopat, Thane West.",
    image: "/images/sports-arthroscopy.jpg",
    hero: "Keyhole surgery means seeing inside the joint clearly — and fixing it through incisions smaller than your fingertip.",
    specialty: "sports-arthroscopy",
    relatedArticles: [
      { slug: "acl-tear-symptoms-treatment", title: "ACL tear — the case for keyhole surgery" }
    ],
    sections: [
      {
        heading: "What is arthroscopic (keyhole) surgery?",
        body: "Arthroscopy uses a camera inserted through a small incision to see inside a joint on a high-definition screen. Surgical instruments through 1–2 additional small incisions allow repair, reconstruction or removal of damaged tissue — without the large incision and slow recovery of traditional open surgery."
      },
      {
        heading: "Procedures performed arthroscopically",
        bullets: [
          "Knee: ACL reconstruction, meniscus repair/trimming, cartilage treatment, loose body removal",
          "Shoulder: Bankart repair (instability), rotator cuff repair, SLAP repair, subacromial decompression",
          "Ankle: cartilage lesion treatment, impingement release, loose body removal",
          "Diagnostic arthroscopy — when imaging is inconclusive, the camera gives a definitive answer"
        ]
      },
      {
        heading: "Advantages over open surgery",
        bullets: [
          "Smaller incisions — typically 2–3 cuts of 5 mm each",
          "Day-care in most cases — home the same or next day",
          "Less post-operative pain — less tissue damage",
          "Faster rehabilitation — joints move sooner, muscles recover faster",
          "Lower infection risk — small wounds close more quickly"
        ]
      }
    ],
    faqs: [
      { q: "Is keyhole surgery safe?", a: "Arthroscopic surgery has a very low complication rate. Risks include infection (<0.5%), blood clots (minimised by early movement), and instrument breakage (rare)." },
      { q: "How long does knee arthroscopy take?", a: "Diagnostic arthroscopy: 20–30 minutes. ACL reconstruction: 60–90 minutes. Meniscus repair: 45–60 minutes. All performed under spinal or general anaesthesia." },
      { q: "Can arthroscopy treat knee arthritis?", a: "For generalised arthritis, no — washout has not been shown to provide lasting benefit. Arthroscopy is valuable for specific structural problems: meniscus tears, ligament reconstruction, cartilage lesions." }
    ]
  },
  // ── SPINE SURGERY ────────────────────────────────────────────────────────
  {
    slug: "spine-surgery",
    name: "Spine Surgery",
    group: "Spine Surgery",
    featured: true,
    keywordTitle: "Spine Surgeon in Thane | PIVD, Back Pain & Spine Surgery Specialist",
    metaDescription: "Spine surgery in Thane by Dr. Niranjan Ghag — PIVD (disc slip), back pain (kamar dard), lumbar, thoracic and cervical spine surgery, spinal instability, spondylolisthesis. Minimally invasive techniques. Khopat, Thane West opp. Viviana Mall.",
    image: "/images/trauma-fracture.jpg",
    hero: "Most back and neck pain resolves without surgery — but when it does not, precise spinal surgery restores life quality.",
    specialty: "trauma-fracture",
    relatedArticles: [
      { slug: "fracture-healing-surgery", title: "Spinal fractures — when surgery is needed" }
    ],
    sections: [
      {
        heading: "Spine conditions we treat",
        bullets: [
          "PIVD (Prolapsed Intervertebral Disc) — disc slip causing back pain with leg pain (sciatica) or arm pain",
          "Lumbar disc herniation — lower back disc pressing on the nerve; L4-L5 and L5-S1 most common",
          "Cervical disc herniation — neck disc pressing on the nerve; arm pain, numbness, weakness",
          "Spinal instability and spondylolisthesis — one vertebra slipping over another; causes chronic back pain and leg symptoms",
          "Lumbar canal stenosis — narrowing of the spinal canal causing back and leg pain with walking",
          "Thoracic spine conditions — mid-back fractures, disc problems, deformity",
          "Spinal fractures — vertebral compression fractures from osteoporosis or trauma; burst fractures from accidents",
          "Chronic back pain (kamar dard / कंबरदुखी) — comprehensive assessment and treatment programme"
        ]
      },
      {
        heading: "Surgical procedures performed",
        bullets: [
          "Microdiscectomy — minimally invasive removal of the disc fragment pressing on the nerve; most patients go home within 24–48 hours",
          "Lumbar spinal fusion (TLIF/PLIF) — joining two vertebrae to correct instability or spondylolisthesis",
          "Cervical discectomy and fusion (ACDF) — disc removed from the front of the neck, vertebrae fused; highly effective for cervical PIVD",
          "Laminectomy and decompression — removing bone and soft tissue to enlarge the spinal canal in stenosis",
          "Vertebroplasty and kyphoplasty — cement injection for painful osteoporotic vertebral fractures; pain relief within 24–48 hours",
          "Thoracic spine surgery — fracture fixation and decompression for thoracic conditions"
        ]
      },
      {
        heading: "When is spine surgery actually needed?",
        body: "The majority of back and neck pain gets better with physiotherapy, posture correction, appropriate pain management and time — without surgery. Surgery is recommended when:",
        bullets: [
          "Nerve compression is causing progressive weakness (foot drop, hand weakness)",
          "Bladder or bowel control is affected — this is a surgical emergency",
          "Severe radiculopathy (shooting pain down the arm or leg) has not responded to 6–12 weeks of conservative treatment",
          "Spinal instability causing mechanical pain that limits daily function",
          "Imaging confirms a structural problem that matches the symptoms precisely"
        ]
      }
    ],
    faqs: [
      { q: "What is PIVD and do I need surgery for it?", a: "PIVD (Prolapsed Intervertebral Disc) means the soft inner part of a disc has pushed out through its outer layer and is pressing on a nerve — causing back pain that radiates down the leg (sciatica) or arm. Most cases (90%) resolve with physiotherapy and pain management within 6–12 weeks. Surgery is needed when there is progressive weakness, bladder/bowel involvement, or pain that does not respond to conservative treatment." },
      { q: "What is the recovery from a microdiscectomy?", a: "Most patients go home within 24–48 hours. Walking starts the same day. Light activity resumes within 1–2 weeks. Desk work typically at 2–4 weeks. Physiotherapy begins soon after surgery to strengthen the core muscles and prevent recurrence." },
      { q: "My MRI shows a disc bulge — does it need surgery?", a: "An MRI finding alone is not a reason for surgery. Many people have disc bulges on MRI with no symptoms at all. Surgery is decided by the symptoms (especially weakness and bladder/bowel changes) combined with the imaging — not imaging alone." },
      { q: "Can I avoid spine surgery for spondylolisthesis?", a: "Mild spondylolisthesis is often managed successfully with core strengthening, weight management and activity modification. Progressive slippage, instability causing severe mechanical pain, or nerve compression symptoms that do not respond to conservative measures are reasons to consider surgical fusion." },
      { q: "What is kamar dard (back pain) and when should I see a specialist?", a: "Kamar dard (कंबरदुखी / back pain) is very common — most episodes resolve in 4–6 weeks. See a specialist if: pain shoots down the leg, you have weakness or numbness, pain started after an injury or fall, there is no improvement after 4–6 weeks of rest and basic treatment, or you are over 50 with new-onset back pain." }
    ]
  }
];
PROCEDURES.map((p) => `/procedures/${p.slug}`);
const GROUPS = ["Joint Replacement", "Trauma & Fracture", "Foot & Ankle", "Sports Medicine", "Spine Surgery"];
function groupedProcedures() {
  const map = {};
  GROUPS.forEach((g) => {
    map[g] = [];
  });
  PROCEDURES.forEach((p) => {
    if (map[p.group]) map[p.group].push(p);
  });
  return map;
}
const topLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/specialties/joint-replacement", label: "Specialties" },
  { to: "/education", label: "Patient Education" }
];
function Navbar() {
  const [open, setOpen] = useState(false);
  const [procOpen, setProcOpen] = useState(false);
  const closeTimer = useRef(null);
  const grouped = groupedProcedures();
  const openProc = () => {
    clearTimeout(closeTimer.current);
    setProcOpen(true);
  };
  const closeProc = () => {
    closeTimer.current = setTimeout(() => setProcOpen(false), 120);
  };
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 border-b border-white/40 bg-white/75 shadow-glass backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "group flex items-center gap-2", "aria-label": "Home", children: [
        /* @__PURE__ */ jsx("img", { src: "/icon-192.png", alt: "", width: "36", height: "36", className: "h-9 w-9 transition-transform duration-300 group-hover:scale-105" }),
        /* @__PURE__ */ jsx("span", { className: "font-serif text-lg font-bold text-brand-brown", children: SITE.name })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "hidden items-center gap-6 md:flex", children: [
        topLinks.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          NavLink,
          {
            to: l.to,
            className: ({ isActive }) => `text-sm font-medium transition-colors hover:text-brand-gold ${isActive ? "text-brand-gold" : "text-slate-700"}`,
            children: l.label
          }
        ) }, l.to)),
        /* @__PURE__ */ jsxs(
          "li",
          {
            className: "relative",
            onMouseEnter: openProc,
            onMouseLeave: closeProc,
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  className: "flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-brand-gold transition-colors",
                  "aria-expanded": procOpen,
                  children: [
                    "Procedures",
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: `h-3.5 w-3.5 transition-transform ${procOpen ? "rotate-180" : ""}`,
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ jsx("path", { d: "M6 9l6 6 6-6" })
                      }
                    )
                  ]
                }
              ),
              procOpen && /* @__PURE__ */ jsx("div", { className: "fixed left-1/2 top-16 -translate-x-1/2 w-[640px] max-w-[92vw] pt-1 animate-fade-up", onMouseEnter: openProc, onMouseLeave: closeProc, children: /* @__PURE__ */ jsx("div", { className: "glass rounded-2xl p-5 shadow-glass-lg", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-6 gap-y-4", children: GROUPS.filter((g) => {
                var _a;
                return (_a = grouped[g]) == null ? void 0 : _a.length;
              }).map((group) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "mb-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold", children: group }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-0.5", children: grouped[group].map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: `/procedures/${p.slug}`,
                    className: "block rounded-lg px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold transition",
                    onClick: () => setProcOpen(false),
                    children: p.name
                  }
                ) }, p.slug)) })
              ] }, group)) }) }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          NavLink,
          {
            to: "/book",
            className: "rounded-full bg-gradient-to-r from-brand-brown to-brand-gold px-5 py-2 text-sm font-semibold text-white shadow-md shadow-brand-brown/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow",
            children: "Book Appointment"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setOpen(!open),
          className: "md:hidden rounded p-2 text-slate-700 hover:bg-slate-100",
          "aria-expanded": open,
          "aria-label": "Toggle menu",
          children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: open ? /* @__PURE__ */ jsx("path", { d: "M6 6l12 12M18 6L6 18" }) : /* @__PURE__ */ jsx("path", { d: "M4 7h16M4 12h16M4 17h16" }) })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "glass animate-fade-up border-t border-white/40 px-4 py-3 md:hidden", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-0.5", children: [
      topLinks.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        NavLink,
        {
          to: l.to,
          onClick: () => setOpen(false),
          className: "block py-2.5 text-sm font-medium text-slate-700",
          children: l.label
        }
      ) }, l.to)),
      GROUPS.filter((g) => {
        var _a;
        return (_a = grouped[g]) == null ? void 0 : _a.length;
      }).map((group) => /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("p", { className: "pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-brand-gold", children: group }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-0.5 pl-2", children: grouped[group].map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to: `/procedures/${p.slug}`,
            onClick: () => setOpen(false),
            className: "block py-1.5 text-sm text-slate-700",
            children: p.name
          }
        ) }, p.slug)) })
      ] }, group)),
      /* @__PURE__ */ jsx("li", { className: "pt-3", children: /* @__PURE__ */ jsx(
        NavLink,
        {
          to: "/book",
          onClick: () => setOpen(false),
          className: "block rounded-full bg-gradient-to-r from-brand-brown to-brand-gold px-5 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-brand-brown/20",
          children: "Book Appointment"
        }
      ) })
    ] }) })
  ] });
}
const featuredProcedures = PROCEDURES.filter((p) => p.featured);
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative overflow-hidden bg-brand-dark text-slate-300", children: [
    /* @__PURE__ */ jsx("div", { className: "blob -top-24 left-0 h-72 w-72 bg-brand-gold/20", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("div", { className: "blob -bottom-24 right-0 h-80 w-80 bg-brand-brown/30", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-serif text-lg font-bold text-white", children: SITE.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed", children: "Advanced orthopaedic care with precision, compassion & innovation." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold", children: "Specialties" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: SPECIALTIES.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: `/specialties/${s.slug}`, className: "transition-colors hover:text-white", children: s.name }) }, s.slug)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold", children: "Procedures" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: featuredProcedures.map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: `/procedures/${p.slug}`, className: "transition-colors hover:text-white", children: p.name }) }, p.slug)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold", children: CLINICS.length > 1 ? "Locations & Contact" : "Clinic & Contact" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: CLINICS.map((clinic, i) => /* @__PURE__ */ jsxs("div", { className: i > 0 ? "border-t border-white/10 pt-4" : "", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-white", children: clinic.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-relaxed", children: clinic.address }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: clinic.mapUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-1 inline-block text-sm text-brand-gold transition-colors hover:text-white hover:underline",
              children: "Get Directions →"
            }
          )
        ] }, i)) }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `tel:+${SITE.phoneRaw}`, className: "transition-colors hover:text-white", children: SITE.phoneDisplay }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `mailto:${SITE.email}`, className: "transition-colors hover:text-white", children: SITE.email }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/sitemap", className: "transition-colors hover:text-white", children: "Sitemap" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative border-t border-white/10 py-4 text-center text-xs text-slate-400", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      SITE.name,
      ". All rights reserved."
    ] })
  ] });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const headState = {
  title: "",
  description: "",
  path: "/",
  jsonLd: null
};
function Seo({ title: title2, description, path = "/", jsonLd = null }) {
  const resolvedTitle = title2 ? `${title2} | ${SITE.name}` : `${SITE.name} | ${SITE.title}`;
  headState.title = resolvedTitle;
  headState.description = description || "";
  headState.path = path;
  headState.jsonLd = jsonLd || null;
  useEffect(() => {
    document.title = resolvedTitle;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    if (description) meta.content = description;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE.url}${path}`;
    let ld = null;
    if (jsonLd) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.dataset.route = "true";
      ld.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(ld);
    }
    return () => {
      if (ld) ld.remove();
    };
  }, [resolvedTitle, description, path, jsonLd]);
  return null;
}
function Image({
  src,
  alt,
  width,
  height,
  aspect,
  avifSrc,
  webpSrc,
  priority = false,
  sizes,
  className = "",
  imgClassName = ""
}) {
  const loading = priority ? "eager" : "lazy";
  const fetchPriority = priority ? "high" : "auto";
  const img = /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt,
      width,
      height,
      sizes,
      loading,
      decoding: priority ? "sync" : "async",
      fetchpriority: fetchPriority,
      className: `h-full w-full object-cover ${imgClassName}`
    }
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `relative overflow-hidden ${className}`,
      style: aspect ? { aspectRatio: aspect } : void 0,
      children: avifSrc || webpSrc ? /* @__PURE__ */ jsxs("picture", { children: [
        avifSrc && /* @__PURE__ */ jsx("source", { srcSet: avifSrc, type: "image/avif", sizes }),
        webpSrc && /* @__PURE__ */ jsx("source", { srcSet: webpSrc, type: "image/webp", sizes }),
        img
      ] }) : img
    }
  );
}
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("div", { ref, className: `reveal ${className}`, style: delay ? { transitionDelay: `${delay}ms` } : void 0, children });
}
function Clinics() {
  var _a;
  const [selectedClinic, setSelectedClinic] = useState(0);
  const [date2, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const clinic = CLINICS[selectedClinic] || CLINICS[0];
  const slots = useMemo(() => {
    if (!date2) return [];
    const out = [];
    const fmt = (h) => {
      const period = h < 12 ? "AM" : "PM";
      const display = h % 12 === 0 ? 12 : h % 12;
      return { label: `${display}:00 ${period}`, half: `${display}:30 ${period}` };
    };
    const day = new Date(date2).getDay();
    if (day === 0) {
      for (let h = 0; h < 24; h++) {
        const { label, half } = fmt(h);
        out.push(label, half);
      }
    } else {
      for (let h = 0; h < 8; h++) {
        const { label, half } = fmt(h);
        out.push(label, half);
      }
      for (let h = 15; h < 23; h++) {
        const { label, half } = fmt(h);
        out.push(label, half);
      }
      out.push(fmt(23).label);
      out.push("11:30 PM");
    }
    return out;
  }, [date2]);
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const waLink = useMemo(() => {
    const msg = [
      `Hello, I would like to book an appointment with ${SITE.name}.`,
      name && `Name: ${name}`,
      date2 && `Preferred date: ${date2}`,
      slot && `Preferred time: ${slot}`,
      clinic && `Location: ${clinic.name}, ${clinic.shortLocation}`
    ].filter(Boolean).join("\n");
    return `${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
  }, [name, date2, slot, clinic]);
  if (!CLINICS.length) return null;
  return /* @__PURE__ */ jsxs("section", { "aria-labelledby": "clinic-heading", className: "mx-auto max-w-6xl px-4 py-16", children: [
    /* @__PURE__ */ jsx("p", { className: "eyebrow justify-center text-center", children: CLINICS.length > 1 ? "Consulting Locations" : "Consulting Location" }),
    /* @__PURE__ */ jsx("h2", { id: "clinic-heading", className: "mt-2 text-center font-serif text-3xl font-bold text-slate-900", children: "Visit the Clinic" }),
    CLINICS.length > 1 && /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-2", children: CLINICS.map((c, i) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          setSelectedClinic(i);
          setDate("");
          setSlot("");
        },
        className: `rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${selectedClinic === i ? "bg-gradient-to-r from-brand-brown to-brand-gold text-white shadow-md shadow-brand-brown/20" : "border border-slate-200 bg-white/60 text-slate-600 backdrop-blur hover:border-brand-gold hover:text-brand-gold"}`,
        children: c.name
      },
      i
    )) }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-8 transition-shadow duration-300 hover:shadow-glass-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-brown", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ jsx("path", { d: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" }),
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "3" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-bold text-slate-900", children: clinic.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-brand-gold", children: clinic.shortLocation })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm leading-relaxed text-slate-600", children: clinic.address }),
        clinic.landmark && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-slate-500", children: clinic.landmark }),
        ((_a = clinic.hours) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-2xl bg-slate-50 p-5", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500", children: "OPD Hours" }),
          /* @__PURE__ */ jsx("ul", { className: "mt-2 space-y-1.5", children: clinic.hours.map((h) => /* @__PURE__ */ jsxs("li", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-slate-600", children: h.days }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-900", children: h.time })
          ] }, h.days)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: clinic.mapUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 rounded-full border border-brand-brown px-5 py-2.5 text-sm font-semibold text-brand-brown transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-brown hover:text-white",
              children: "Get Directions"
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `tel:+${SITE.phoneRaw}`,
              className: "inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100",
              children: [
                "Call ",
                SITE.phoneDisplay
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark to-slate-900 p-8 text-white shadow-glass-lg", children: [
        /* @__PURE__ */ jsx("div", { className: "blob -right-10 -top-10 h-48 w-48 bg-brand-gold/15", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-bold", children: "Book via WhatsApp" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-300", children: "Choose a day and time — we'll confirm your appointment on WhatsApp." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4", children: [
          CLINICS.length > 1 && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400", children: "Select Location" }),
            /* @__PURE__ */ jsx(
              "select",
              {
                value: selectedClinic,
                onChange: (e) => {
                  setSelectedClinic(Number(e.target.value));
                  setDate("");
                  setSlot("");
                },
                className: "w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm text-white focus:border-brand-gold focus:outline-none",
                children: CLINICS.map((c, i) => /* @__PURE__ */ jsxs("option", { value: i, children: [
                  c.name,
                  " — ",
                  c.shortLocation
                ] }, i))
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "bk-name", className: "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400", children: "Your Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "bk-name",
                type: "text",
                value: name,
                onChange: (e) => setName(e.target.value),
                placeholder: "Full name",
                className: "w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-brand-gold focus:outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "bk-date", className: "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400", children: "Preferred Date" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "bk-date",
                type: "date",
                min: today,
                value: date2,
                onChange: (e) => {
                  setDate(e.target.value);
                  setSlot("");
                },
                className: "w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm text-white focus:border-brand-gold focus:outline-none"
              }
            )
          ] }),
          date2 && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400", children: "Available Slots" }),
            /* @__PURE__ */ jsx("div", { className: "grid max-h-40 grid-cols-3 gap-2 overflow-y-auto pr-1 sm:grid-cols-4", children: slots.map((s) => /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setSlot(s),
                className: `rounded-lg px-2 py-2 text-xs font-medium transition ${slot === s ? "bg-brand-gold text-brand-dark" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`,
                children: s
              },
              s
            )) })
          ] }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: waLink,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110",
              children: [
                /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.87-9.9 9.87zm8.42-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.41z" }) }),
                "Book Appointment on WhatsApp"
              ]
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
const HOME_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Dr. Niranjan Ghag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Niranjan Ghag is an orthopaedic surgeon based in Thane West, Maharashtra, specialising in robotic hip and knee replacement, foot and ankle surgery, sports injuries and arthroscopy, and trauma and fracture management."
      }
    },
    {
      "@type": "Question",
      name: "Where does Dr. Niranjan Ghag consult in Thane?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "He consults at two Thane West locations: Joshi's Neurotrauma Centre, Khopat (opposite Viviana Mall), and Sahayogi Hospital LLP, Naupada. Appointments can be booked online or on WhatsApp at +91 90760 79000."
      }
    },
    {
      "@type": "Question",
      name: "What conditions does Dr. Ghag treat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "He treats knee and hip arthritis, sports injuries such as ACL and meniscus tears, foot and ankle problems including heel pain and plantar fasciitis, and fractures and complex trauma. Both non-surgical and surgical options are offered."
      }
    },
    {
      "@type": "Question",
      name: "Which languages are consultations available in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consultations are available in English, Marathi and Hindi."
      }
    }
  ]
};
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Orthopaedic Surgeon in Thane",
        description: "Dr. Niranjan Ghag is an orthopaedic surgeon in Thane West offering robotic hip & knee replacement, foot & ankle surgery, sports injury & arthroscopy, and trauma care. Book in English, Marathi or Hindi.",
        path: "/",
        jsonLd: HOME_FAQ_JSONLD
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white", children: [
      /* @__PURE__ */ jsx("div", { className: "blob -left-20 -top-24 h-80 w-80 bg-brand-gold/20 animate-float-slow", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx("div", { className: "blob -right-16 top-1/3 h-96 w-96 bg-brand-brown/10 animate-float", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "glass inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-brown", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-gold", "aria-hidden": "true" }),
            "Now accepting consultations"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "mt-5 font-serif text-4xl font-bold leading-tight text-slate-900 lg:text-5xl", children: [
            "Advanced Orthopaedic Care with",
            " ",
            /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text text-transparent", children: "Precision, Compassion & Innovation" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-lg leading-relaxed text-slate-600", children: "Dr. Niranjan Ghag is an orthopaedic surgeon in Thane West, Maharashtra, specialising in robotic-assisted joint replacement of the hip and knee, foot & ankle surgery, sports injuries & arthroscopy, and complex trauma & fracture management. He consults at Joshi’s Neurotrauma Centre, Khopat (opposite Viviana Mall) and Sahayogi Hospital LLP, Naupada — both in Thane West — with appointments available in English, Marathi and Hindi. His tissue-sparing robotic techniques are designed for faster recovery: many knee and hip replacement patients walk the same day and return home within two to three days." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsx(Link, { to: "/book", className: "btn-gradient", children: "Book Appointment" }),
            /* @__PURE__ */ jsxs("a", { href: `tel:+${SITE.phoneRaw}`, className: "btn-outline", children: [
              "Call ",
              SITE.phoneDisplay
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto w-full max-w-md", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-gold/30 via-transparent to-brand-brown/20 blur-2xl", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx(
            Image,
            {
              src: "/images/dr-ghag-photo.jpg",
              webpSrc: "/images/dr-ghag-photo-400.webp 400w, /images/dr-ghag-photo-540.webp 540w, /images/dr-ghag-photo.webp 969w",
              alt: "Dr. Niranjan Ghag, Orthopaedic Surgeon",
              width: 1157,
              height: 1217,
              aspect: "4/5",
              priority: true,
              sizes: "(min-width: 1024px) 540px, 100vw",
              className: "relative w-full rounded-3xl border-4 border-white bg-slate-200 shadow-glass-lg"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-6xl px-4 py-16", "aria-labelledby": "specialties-heading", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow justify-center text-center", children: "Clinical Expertise" }),
      /* @__PURE__ */ jsx("h2", { id: "specialties-heading", className: "mt-2 text-center font-serif text-3xl font-bold text-slate-900", children: "Specialties" }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: SPECIALTIES.map((s, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/specialties/${s.slug}`,
          className: "glass group flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glass-lg",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-bold text-slate-900 group-hover:text-brand-brown", children: s.name }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 flex-1 text-sm leading-relaxed text-slate-600", children: s.short }),
            /* @__PURE__ */ jsx("span", { className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-gold transition-transform duration-300 group-hover:translate-x-1", children: "Learn more →" })
          ]
        }
      ) }, s.slug)) })
    ] }),
    /* @__PURE__ */ jsx(Clinics, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-brown to-brand-dark", children: [
      /* @__PURE__ */ jsx("div", { className: "blob left-1/4 top-0 h-64 w-64 bg-brand-gold/20 animate-float", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-16 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl font-bold text-white", children: "Unsure about your condition?" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-2xl text-white/80", children: "Schedule a detailed clinical evaluation. A correct early diagnosis translates to simpler treatments and faster recovery." }),
        /* @__PURE__ */ jsx(Link, { to: "/book", className: "btn-gradient mt-7", children: "Book Your Consultation" })
      ] }) })
    ] })
  ] });
}
const milestones = [
  { title: "MBBS", detail: "Completed foundational medical training with honors." },
  { title: "M.S. (Ortho)", detail: "Specialized in orthopaedic surgery." },
  { title: "DNB (Orthopaedics)", detail: "Achieved diplomate of national board." },
  {
    title: "International Fellowships",
    detail: "Completed FIJR, FIRJR, FASM, and FFAS focusing on joint replacement, sports medicine, and foot & ankle surgery."
  }
];
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "About — Credentials & Biography",
        description: "Dr. Niranjan Sunil Ghag is a distinguished orthopaedic surgeon with international fellowship training in joint replacement, sports medicine and foot & ankle surgery.",
        path: "/about"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden px-4 py-16", children: [
      /* @__PURE__ */ jsx("div", { className: "blob -left-24 top-0 h-72 w-72 bg-brand-gold/15 animate-float-slow", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "About" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-2 font-serif text-4xl font-bold text-slate-900", children: "Professional Journey & Philosophy" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-12 lg:grid-cols-[2fr,3fr]", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-gold/25 via-transparent to-brand-brown/15 blur-2xl", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx(
              Image,
              {
                src: "/images/dr-ghag-photo.jpg",
                webpSrc: "/images/dr-ghag-photo.webp",
                alt: `${SITE.fullName}, Orthopaedic Surgeon`,
                width: 1157,
                height: 1217,
                aspect: "4/5",
                className: "glass relative rounded-3xl p-2",
                imgClassName: "rounded-2xl"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-slate-700 leading-relaxed", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              SITE.fullName,
              " is a distinguished Orthopaedic Surgeon with a comprehensive background in complex trauma, joint replacement, and sports medicine. His practice is built on a foundation of rigorous international training and a deep-seated commitment to patient welfare."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "With a belief that every patient deserves a life free of pain and physical limitation, Dr. Ghag integrates the latest advancements in medical technology, including robotic surgery and AI-driven diagnostics, into his surgical techniques to ensure precision, smaller incisions, and faster recovery times." }),
            /* @__PURE__ */ jsx("p", { children: "Beyond his clinical expertise, Dr. Ghag is passionate about giving back to the community and frequently participates in outreach programs aimed at providing advanced orthopaedic care to underserved populations." }),
            /* @__PURE__ */ jsx("h2", { className: "pt-4 font-serif text-2xl font-bold text-slate-900", children: "Credentials" }),
            /* @__PURE__ */ jsx("ol", { className: "relative space-y-6 border-l-2 border-brand-gold/40 pl-6", children: milestones.map((m, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxs("li", { className: "relative", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-brand-gold to-brand-brown shadow-glow", "aria-hidden": "true" }),
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900", children: m.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600", children: m.detail })
            ] }) }, m.title)) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Book() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Book Appointment",
        description: "Book an appointment with Dr. Niranjan Ghag at Joshi's Neurotrauma Centre, Khopat, Thane West — instant confirmation via WhatsApp.",
        path: "/book"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden px-4 pt-16 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "blob left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-brand-gold/15 animate-float-slow", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-4xl font-bold text-slate-900", children: "Book Your Consultation" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-2xl text-slate-600", children: "Select your preferred date and time below. Your booking request is sent directly to the clinic on WhatsApp for confirmation." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Clinics, {})
  ] });
}
const slug$a = "acl-surgery-recovery-timeline";
const title$a = "ACL Surgery Recovery, Week by Week (Walking, Work & Sport)";
const metaDescription$a = "What does ACL reconstruction recovery actually look like, week by week? Milestones for walking, driving, work and return to sport, plus warning signs to watch for.";
const category$a = "Sports Injuries";
const date$a = "2026-06-28";
const readTime$a = 6;
const intro$a = "ACL reconstruction recovery is a marked, criteria-based process — not a fixed calendar everyone follows at the same pace. Here is the typical week-by-week path, what determines how fast you progress, and the warning signs that mean you should call your surgeon.";
const sections$a = [
  {
    heading: "The recovery timeline",
    bullets: [
      "Week 0–2: Walking with crutches/support, gentle range-of-motion exercises, swelling control. Most patients walk the same or next day after surgery",
      "Week 2–6: Progressing to full weight-bearing without support, stationary cycling, early strengthening — crutches are usually dropped within this window",
      "Week 6–12: Driving typically resumes once you can comfortably and safely control the pedals (often around 6–8 weeks); strength training intensifies",
      "Month 3: Straight-line jogging begins, once strength and swelling criteria are met — not by the calendar alone",
      "Month 4–6: Sport-specific drills, agility and cutting work, introduced gradually after formal strength testing",
      "Month 8–12: Full competitive return, only once hop tests and strength symmetry (typically ≥90% compared to the uninjured leg) are achieved"
    ]
  },
  {
    heading: "Why rushing back is the main cause of re-tears",
    body: "The graft is biologically weakest between roughly 6 weeks and 4 months as it remodels and integrates — exactly the period patients feel 'almost normal' and want to push. Returning to pivoting sport before strength and hop tests confirm readiness is the single biggest preventable cause of re-rupture. Criteria-based progression, not the calendar, should decide when you advance each stage."
  },
  {
    heading: "ACL repair vs. reconstruction — a quick note",
    body: "Repair (stitching the original ligament) is only suitable for a small subset of very fresh tears with good tissue quality. Reconstruction (replacing the ligament with a graft) remains the standard, more predictable option for most tears, especially in athletes returning to pivoting sport."
  },
  {
    heading: "Warning signs to call your surgeon",
    bullets: [
      "Sudden increase in swelling, warmth or redness around the knee",
      "Fever, especially with wound redness or discharge — possible infection",
      "A new giving-way or popping sensation during rehab",
      "Calf pain or swelling (possible blood clot) — needs urgent assessment",
      "Inability to achieve expected range of motion by your scheduled physiotherapy milestones"
    ]
  }
];
const faqs$a = [
  {
    q: "How long until I can walk normally after ACL surgery?",
    a: "Most patients walk with crutches within a day, and without any support by around 2–6 weeks, depending on associated meniscus repair and individual healing."
  },
  {
    q: "When can I go back to work after ACL reconstruction?",
    a: "Desk-based work: often 1–2 weeks. Physically demanding or standing work: typically 6–12 weeks, depending on job demands and how your rehabilitation is progressing."
  },
  {
    q: "When can I return to playing sport?",
    a: "Typically 8–12 months, and only after passing strength and hop tests — not by a fixed date. Returning earlier substantially raises the risk of re-tearing the graft."
  },
  {
    q: "Is ACL repair faster to recover from than reconstruction?",
    a: "Repair can suit a small group of very fresh, well-selected tears, but it isn't a universal shortcut — reconstruction remains the more predictable choice for most patients and is assessed case by case."
  }
];
const tags$a = [
  "ACL",
  "recovery",
  "sports injury",
  "rehabilitation"
];
const aclSurgeryRecoveryTimeline = {
  slug: slug$a,
  title: title$a,
  metaDescription: metaDescription$a,
  category: category$a,
  date: date$a,
  readTime: readTime$a,
  intro: intro$a,
  sections: sections$a,
  faqs: faqs$a,
  tags: tags$a
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  category: category$a,
  date: date$a,
  default: aclSurgeryRecoveryTimeline,
  faqs: faqs$a,
  intro: intro$a,
  metaDescription: metaDescription$a,
  readTime: readTime$a,
  sections: sections$a,
  slug: slug$a,
  tags: tags$a,
  title: title$a
}, Symbol.toStringTag, { value: "Module" }));
const slug$9 = "acl-tear-symptoms-treatment";
const title$9 = "ACL Tear: Symptoms, Treatment Options and Return to Sports";
const metaDescription$9 = "Heard a pop in your knee during sports? Learn ACL tear symptoms, when reconstruction is needed, and the return-to-sport timeline from a sports injury specialist in Thane.";
const category$9 = "Sports Injuries";
const date$9 = "2026-06-12";
const readTime$9 = 5;
const intro$9 = "An anterior cruciate ligament (ACL) tear is one of the most common serious sports injuries — typically a sudden twist on a planted foot, an audible pop, and a knee that swells within hours.";
const sections$9 = [
  {
    heading: "Classic symptoms",
    bullets: [
      "A popping sound or sensation at the moment of injury",
      "Rapid swelling within 2–6 hours",
      'A feeling that the knee "gives way" on turning or pivoting',
      "Difficulty trusting the knee on stairs or uneven ground"
    ]
  },
  {
    heading: "Treatment: surgery or not?",
    body: "Not every ACL tear needs an operation. Low-demand patients with stable knees may do well with structured physiotherapy. Active patients, athletes, and anyone with recurrent instability usually benefit from arthroscopic ACL reconstruction — a keyhole procedure using a graft to rebuild the ligament."
  },
  {
    heading: "Return to sports",
    body: "With modern arthroscopic reconstruction and a criteria-based rehabilitation protocol, jogging typically resumes around 3 months, sport-specific training at 6 months, and full competitive return between 8 and 12 months once strength and stability testing are passed."
  }
];
const faqs$9 = [
  {
    q: "Can an ACL tear heal on its own?",
    a: "A completely torn ACL does not reattach by itself because of poor blood supply. Partial tears and low-demand knees can sometimes be managed with physiotherapy alone."
  },
  {
    q: "Is ACL reconstruction an open surgery?",
    a: "No. It is performed arthroscopically through keyhole incisions, usually as a short-stay procedure with walking allowed the same or next day."
  },
  {
    q: "What happens if I delay ACL treatment?",
    a: "Repeated episodes of giving way can damage the meniscus and cartilage, accelerating arthritis. Early specialist assessment protects the rest of the knee."
  }
];
const tags$9 = [
  "ACL",
  "sports injury",
  "knee",
  "arthroscopy"
];
const aclTearSymptomsTreatment = {
  slug: slug$9,
  title: title$9,
  metaDescription: metaDescription$9,
  category: category$9,
  date: date$9,
  readTime: readTime$9,
  intro: intro$9,
  sections: sections$9,
  faqs: faqs$9,
  tags: tags$9
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  category: category$9,
  date: date$9,
  default: aclTearSymptomsTreatment,
  faqs: faqs$9,
  intro: intro$9,
  metaDescription: metaDescription$9,
  readTime: readTime$9,
  sections: sections$9,
  slug: slug$9,
  tags: tags$9,
  title: title$9
}, Symbol.toStringTag, { value: "Module" }));
const slug$8 = "ankle-sprain-vs-fracture";
const title$8 = "Ankle Sprain or Fracture? How to Tell the Difference";
const metaDescription$8 = "Twisted your ankle? Learn the signs that separate a simple sprain from a fracture, correct first aid, and when an X-ray is essential — from a foot & ankle surgeon in Thane.";
const category$8 = "Foot & Ankle";
const date$8 = "2026-06-12";
const readTime$8 = 4;
const intro$8 = "Most twisted ankles are ligament sprains that heal with simple care. But some are fractures or significant ligament ruptures, and treating these like a minor sprain leads to chronic pain and instability.";
const sections$8 = [
  {
    heading: "Signs that suggest a fracture",
    bullets: [
      "Inability to take four steps immediately after injury or in the clinic",
      "Bone tenderness over the ankle prominences (malleoli) or midfoot",
      "Rapid, severe swelling with visible deformity",
      "Numbness or color change in the foot"
    ]
  },
  {
    heading: "Correct first aid",
    body: "Follow RICE — Rest, Ice (15–20 minutes at a time), Compression bandage and Elevation above heart level. Avoid massage, hot fomentation and walking through severe pain in the first 48 hours."
  },
  {
    heading: "Why proper assessment matters",
    body: 'Repeated "minor" sprains often mean an untreated ligament injury. Chronic ankle instability is preventable with early physiotherapy, bracing, and in selected cases arthroscopic ligament repair. A weight-bearing X-ray decides the matter in minutes.'
  }
];
const faqs$8 = [
  {
    q: "Can I walk on a fractured ankle?",
    a: 'Sometimes, yes — which is why "I can walk, so it is not broken" is unreliable. Undisplaced fractures may allow painful walking but still need protection to heal correctly.'
  },
  {
    q: "How long does an ankle sprain take to heal?",
    a: "Mild sprains settle in 1–3 weeks; moderate ones in 4–6 weeks. Pain beyond 6 weeks deserves specialist review for ligament or cartilage injury."
  },
  {
    q: "Do all ankle fractures need surgery?",
    a: "No. Stable, well-aligned fractures heal in a cast or boot. Surgery is needed when the joint surface is displaced or the ankle is unstable."
  }
];
const tags$8 = [
  "ankle",
  "sprain",
  "fracture",
  "foot"
];
const ankleSprainVsFracture = {
  slug: slug$8,
  title: title$8,
  metaDescription: metaDescription$8,
  category: category$8,
  date: date$8,
  readTime: readTime$8,
  intro: intro$8,
  sections: sections$8,
  faqs: faqs$8,
  tags: tags$8
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  category: category$8,
  date: date$8,
  default: ankleSprainVsFracture,
  faqs: faqs$8,
  intro: intro$8,
  metaDescription: metaDescription$8,
  readTime: readTime$8,
  sections: sections$8,
  slug: slug$8,
  tags: tags$8,
  title: title$8
}, Symbol.toStringTag, { value: "Module" }));
const slug$7 = "early-signs-knee-arthritis";
const title$7 = "Early Signs of Knee Arthritis: Don't Ignore These Symptoms";
const metaDescription$7 = "Knee pain while climbing stairs or getting up from a chair? Learn the early warning signs of knee arthritis, home care, and when to see an orthopaedic surgeon in Thane.";
const category$7 = "Knee";
const date$7 = "2026-06-12";
const readTime$7 = 5;
const intro$7 = "Do you feel knee pain while climbing stairs or getting up from a chair? It may not be 'just age'. Many patients ignore early symptoms hoping they will go away, but this often leads to worsening of the condition over time.";
const sections$7 = [
  {
    heading: "Warning signs to watch for",
    body: "Early knee arthritis rarely announces itself dramatically. It builds gradually, which is exactly why it gets ignored.",
    bullets: [
      "Pain during movement or weight-bearing",
      "Swelling and stiffness around the joint, especially in the morning",
      "Difficulty performing regular activities like squatting or climbing stairs",
      "A feeling of instability, clicking or grinding in the knee"
    ]
  },
  {
    heading: "What you can do at home",
    body: "In the earliest stages, conservative measures can significantly slow progression.",
    bullets: [
      "Rest, Ice, Compression, Elevation (RICE) during flare-ups",
      "Targeted physiotherapy and quadriceps-strengthening exercises",
      "Weight management — every extra kilogram adds 3–4 kg of load on the knee",
      "Low-impact activity such as swimming or cycling"
    ]
  },
  {
    heading: "When to see a specialist",
    body: "If pain persists beyond a few weeks, disturbs sleep, or limits daily activity, a clinical evaluation and standing X-ray can grade the arthritis accurately. Early diagnosis translates to simpler treatments — from physiotherapy and injections to, in advanced cases, robotic-assisted knee replacement with rapid recovery."
  }
];
const faqs$7 = [
  {
    q: "Can early knee arthritis be reversed?",
    a: "Cartilage damage cannot be fully reversed, but early intervention with physiotherapy, weight management and activity modification can halt progression and keep you pain-free for years without surgery."
  },
  {
    q: "Does knee arthritis always need replacement surgery?",
    a: "No. Most early and moderate cases are managed without surgery. Replacement is considered only when pain and disability persist despite conservative treatment."
  },
  {
    q: "Which doctor should I see for knee pain in Thane?",
    a: "An orthopaedic surgeon can evaluate knee pain clinically and with X-rays. Dr. Niranjan Ghag consults at Joshi's Neurotrauma Centre, Khopat, Thane West."
  }
];
const tags$7 = [
  "arthritis",
  "knee",
  "joint pain"
];
const earlySignsKneeArthritis = {
  slug: slug$7,
  title: title$7,
  metaDescription: metaDescription$7,
  category: category$7,
  date: date$7,
  readTime: readTime$7,
  intro: intro$7,
  sections: sections$7,
  faqs: faqs$7,
  tags: tags$7
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  category: category$7,
  date: date$7,
  default: earlySignsKneeArthritis,
  faqs: faqs$7,
  intro: intro$7,
  metaDescription: metaDescription$7,
  readTime: readTime$7,
  sections: sections$7,
  slug: slug$7,
  tags: tags$7,
  title: title$7
}, Symbol.toStringTag, { value: "Module" }));
const slug$6 = "fracture-healing-surgery";
const title$6 = "Why Do Some Fractures Need Surgery? Bone Healing Explained";
const metaDescription$6 = "Not every broken bone needs an operation. Learn how fractures heal, which ones need fixation, and what malunion and nonunion mean — from a trauma surgeon in Thane.";
const category$6 = "Trauma";
const date$6 = "2026-06-12";
const readTime$6 = 5;
const intro$6 = "Bone is one of the few tissues in the body that heals by regenerating itself — but only if the broken ends are adequately aligned and held still. That single principle decides whether your fracture needs a cast or an operation.";
const sections$6 = [
  {
    heading: "When a cast is enough",
    body: "Undisplaced or minimally displaced fractures in well-aligned positions heal reliably in a cast or brace. Children heal especially well because their bones remodel as they grow."
  },
  {
    heading: "When surgery is needed",
    bullets: [
      "Displaced fractures that cannot be held aligned in a cast",
      "Fractures involving a joint surface — even 2 mm of step-off accelerates arthritis",
      "Fractures of the thigh and certain leg bones, where casting means months in bed",
      "Open (compound) fractures and fractures with nerve or vessel injury"
    ]
  },
  {
    heading: "Malunion and nonunion",
    body: "A fracture that heals crooked (malunion) or fails to heal (nonunion) causes persistent pain and deformity. These are correctable — with realignment surgery, stable fixation and, where needed, bone grafting. Early specialist care prevents most of them."
  }
];
const faqs$6 = [
  {
    q: "How long does a fracture take to heal?",
    a: "Most adult fractures unite in 6–12 weeks, depending on the bone, blood supply, fixation stability, and factors like smoking and diabetes which slow healing."
  },
  {
    q: "Will the plates and screws be removed later?",
    a: "Usually not — implants are designed to stay safely. Removal is considered only if they cause irritation or for specific reasons after healing is complete."
  },
  {
    q: "Can I walk with an implant in my leg?",
    a: "Yes. Modern internal fixation is designed to allow early movement, and in many cases early weight-bearing, which actually stimulates bone healing."
  }
];
const tags$6 = [
  "fracture",
  "trauma",
  "bone healing",
  "surgery"
];
const fractureHealingSurgery = {
  slug: slug$6,
  title: title$6,
  metaDescription: metaDescription$6,
  category: category$6,
  date: date$6,
  readTime: readTime$6,
  intro: intro$6,
  sections: sections$6,
  faqs: faqs$6,
  tags: tags$6
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  category: category$6,
  date: date$6,
  default: fractureHealingSurgery,
  faqs: faqs$6,
  intro: intro$6,
  metaDescription: metaDescription$6,
  readTime: readTime$6,
  sections: sections$6,
  slug: slug$6,
  tags: tags$6,
  title: title$6
}, Symbol.toStringTag, { value: "Module" }));
const slug$5 = "heel-pain-plantar-fasciitis";
const title$5 = "Heel Pain and Plantar Fasciitis: Causes, Relief and When to See a Specialist";
const metaDescription$5 = "Sharp heel pain with the first steps in the morning? Understand plantar fasciitis causes, proven home treatment, and when to consult a foot & ankle surgeon in Thane.";
const category$5 = "Foot & Ankle";
const date$5 = "2026-06-12";
const readTime$5 = 5;
const intro$5 = "Sharp, stabbing heel pain with your first steps in the morning is the hallmark of plantar fasciitis — inflammation of the thick band of tissue supporting the arch of your foot. It is one of the most common reasons patients visit a foot and ankle clinic.";
const sections$5 = [
  {
    heading: "Why it happens",
    bullets: [
      "Prolonged standing or walking on hard surfaces",
      "Flat feet or very high arches",
      "Tight calf muscles and sudden increases in activity",
      "Unsupportive footwear and excess body weight"
    ]
  },
  {
    heading: "What actually works",
    body: "Over 90% of cases settle without surgery — but only with consistent treatment over weeks, not days.",
    bullets: [
      "Daily plantar fascia and calf stretching",
      "Silicone heel cups or custom arch-support insoles",
      "Activity modification and ice massage",
      "Night splints for stubborn morning pain"
    ]
  },
  {
    heading: "When to see a specialist",
    body: "If heel pain persists beyond 6–8 weeks of home care, a foot and ankle specialist can confirm the diagnosis, rule out stress fractures or nerve entrapment, and offer focused options such as shockwave therapy or targeted injections. Surgery is reserved for the rare resistant case."
  }
];
const faqs$5 = [
  {
    q: "Is a heel spur the cause of my pain?",
    a: "Usually not. Heel spurs are seen on X-rays of many pain-free people. The pain comes from the inflamed plantar fascia, which is why treatment targets the fascia rather than the spur."
  },
  {
    q: "How long does plantar fasciitis take to heal?",
    a: "With consistent stretching and footwear correction, most patients improve substantially within 6–12 weeks, though complete resolution can take several months."
  },
  {
    q: "Do I need an MRI for heel pain?",
    a: "Rarely. Diagnosis is clinical in most cases. Imaging is reserved for atypical pain or when symptoms fail to improve with proper treatment."
  }
];
const tags$5 = [
  "heel pain",
  "plantar fasciitis",
  "foot",
  "tacchi dard"
];
const heelPainPlantarFasciitis = {
  slug: slug$5,
  title: title$5,
  metaDescription: metaDescription$5,
  category: category$5,
  date: date$5,
  readTime: readTime$5,
  intro: intro$5,
  sections: sections$5,
  faqs: faqs$5,
  tags: tags$5
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  category: category$5,
  date: date$5,
  default: heelPainPlantarFasciitis,
  faqs: faqs$5,
  intro: intro$5,
  metaDescription: metaDescription$5,
  readTime: readTime$5,
  sections: sections$5,
  slug: slug$5,
  tags: tags$5,
  title: title$5
}, Symbol.toStringTag, { value: "Module" }));
const slug$4 = "hip-replacement-signs";
const title$4 = "Hip Replacement Surgery: 5 Signs You May Need It";
const metaDescription$4 = "Groin pain, stiffness and a shrinking walking distance? Learn the signs that hip arthritis has advanced, and how modern total hip replacement restores mobility.";
const category$4 = "Joint Replacement";
const date$4 = "2026-06-12";
const readTime$4 = 5;
const intro$4 = "Hip arthritis often masquerades as groin strain, thigh pain or even knee pain. By the time the diagnosis is clear, many patients have quietly given up activities they love. Modern total hip replacement is among the most successful operations in all of surgery.";
const sections$4 = [
  {
    heading: "Five signs the hip is the problem",
    bullets: [
      "Groin or front-of-thigh pain on walking, sometimes felt in the knee",
      "Stiffness — difficulty wearing socks, cutting toenails or sitting cross-legged",
      "Walking distance shrinking month by month",
      "Night pain that disturbs sleep",
      "A limp your family notices before you do"
    ]
  },
  {
    heading: "What surgery achieves",
    body: "Total hip replacement replaces the worn ball-and-socket with smooth, durable implants. Patients typically walk the same or next day, climb stairs within a week, and most describe the result as life-changing — reliable pain relief and restored independence."
  },
  {
    heading: "Timing matters",
    body: "Waiting too long weakens muscles and worsens bone quality, making surgery and rehabilitation harder. If pain limits your life despite medication and physiotherapy, an evaluation with a standing X-ray will clarify your options."
  }
];
const faqs$4 = [
  {
    q: "How long does a hip replacement last?",
    a: "Modern bearings are expected to last 20–25 years or longer, making the operation suitable even for younger, active patients when indicated."
  },
  {
    q: "Can I sit on the floor after hip replacement?",
    a: "With modern implants and surgical techniques, many patients regain the ability to sit cross-legged, though this is discussed individually based on implant type and bone quality."
  },
  {
    q: "Is hip replacement very painful?",
    a: "Multimodal pain management and minimally invasive approaches mean most patients are comfortable and walking within 24 hours of surgery."
  }
];
const tags$4 = [
  "hip replacement",
  "arthritis",
  "hip pain"
];
const hipReplacementSigns = {
  slug: slug$4,
  title: title$4,
  metaDescription: metaDescription$4,
  category: category$4,
  date: date$4,
  readTime: readTime$4,
  intro: intro$4,
  sections: sections$4,
  faqs: faqs$4,
  tags: tags$4
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  category: category$4,
  date: date$4,
  default: hipReplacementSigns,
  faqs: faqs$4,
  intro: intro$4,
  metaDescription: metaDescription$4,
  readTime: readTime$4,
  sections: sections$4,
  slug: slug$4,
  tags: tags$4,
  title: title$4
}, Symbol.toStringTag, { value: "Module" }));
const slug$3 = "joint-replacement-insurance-india";
const title$3 = "Is Robotic Knee/Hip Replacement Covered by Insurance in India?";
const metaDescription$3 = "Does Mediclaim cover knee or hip replacement in India? Cashless vs reimbursement, waiting periods, and the documents you need — explained simply.";
const category$3 = "Joint Replacement";
const date$3 = "2026-06-28";
const readTime$3 = 5;
const intro$3 = "Insurance paperwork shouldn't be the reason you delay a joint replacement you need. Here's how coverage for knee and hip replacement typically works in India, in plain language.";
const sections$3 = [
  {
    heading: "Is joint replacement covered?",
    body: "Yes — knee and hip replacement, including robotic-assisted surgery, are covered by the vast majority of comprehensive health insurance and Mediclaim policies in India. Coverage details (sub-limits, room-rent capping, co-pay) vary by insurer and plan, so the specifics depend on your policy document."
  },
  {
    heading: "Cashless vs. reimbursement",
    bullets: [
      "Cashless: available if the hospital is in your insurer's network. The hospital's insurance desk sends a pre-authorisation request; once approved, you pay only for anything outside the policy's coverage",
      "Reimbursement: if the hospital isn't in-network, you pay upfront and claim the amount back afterwards with bills and discharge documents"
    ]
  },
  {
    heading: "Waiting periods and pre-existing conditions",
    body: "Most policies have a waiting period — commonly in the range of 1–4 years — before pre-existing joint conditions like arthritis are covered, and some policies carry a specific waiting period for joint replacement itself. This is exactly why it's worth checking your policy well before you plan surgery, rather than discovering a gap at the time of admission."
  },
  {
    heading: "Documents typically needed",
    bullets: [
      "Valid policy document and insurance ID card",
      "Doctor's prescription/advice for surgery and relevant X-rays/MRI reports",
      "Pre-authorisation form (hospital insurance desk fills this with you)",
      "Aadhaar/PAN and other KYC documents as the insurer requires",
      "Original bills and discharge summary (for reimbursement claims)"
    ]
  },
  {
    heading: "How we help",
    body: "Our clinic team assists with pre-authorisation paperwork and liaises with the hospital's insurance desk to keep the process as smooth as possible. Bringing your policy document to the first consultation lets us flag any likely gaps early, well before the day of surgery."
  }
];
const faqs$3 = [
  {
    q: "Does Mediclaim cover robotic knee replacement specifically?",
    a: "Most policies cover the procedure itself (knee/hip replacement) regardless of whether it's done robotically or conventionally, though some insurers cap the robotic system's usage fee as a separate, partially-covered charge. Check this specific point with your insurer."
  },
  {
    q: "What if my hospital isn't in my insurer's network?",
    a: "You can still get coverage via reimbursement — pay upfront, then submit bills and discharge documents to your insurer for repayment, per your policy's terms."
  },
  {
    q: "Is there a waiting period for joint replacement under health insurance?",
    a: "Often yes — many policies apply a waiting period (commonly a few years) for pre-existing joint and orthopaedic conditions. The exact duration depends on your specific policy."
  },
  {
    q: "Can the clinic help with insurance paperwork?",
    a: "Yes — our team assists with pre-authorisation forms and coordinates with the hospital's insurance desk on your behalf."
  }
];
const tags$3 = [
  "insurance",
  "mediclaim",
  "knee replacement",
  "hip replacement"
];
const jointReplacementInsuranceIndia = {
  slug: slug$3,
  title: title$3,
  metaDescription: metaDescription$3,
  category: category$3,
  date: date$3,
  readTime: readTime$3,
  intro: intro$3,
  sections: sections$3,
  faqs: faqs$3,
  tags: tags$3
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  category: category$3,
  date: date$3,
  default: jointReplacementInsuranceIndia,
  faqs: faqs$3,
  intro: intro$3,
  metaDescription: metaDescription$3,
  readTime: readTime$3,
  sections: sections$3,
  slug: slug$3,
  tags: tags$3,
  title: title$3
}, Symbol.toStringTag, { value: "Module" }));
const slug$2 = "knee-arthritis-treatment-without-surgery";
const title$2 = "Knee Arthritis Treatment Without Surgery: What Actually Works";
const metaDescription$2 = "Bone-on-bone knee arthritis? Surgery isn't always the first step. An honest look at exercises, injections and lifestyle changes that work — and when surgery is truly needed.";
const category$2 = "Knee";
const date$2 = "2026-06-28";
const readTime$2 = 6;
const intro$2 = "Not every painful knee needs an operation — including many that are described as 'bone-on-bone' on a report. Here's the actual treatment ladder, in the order it should usually be tried, and the honest signs that tell you when surgery has become the right call rather than just an option.";
const sections$2 = [
  {
    heading: "The treatment ladder, step by step",
    body: "Most knee arthritis is managed for years without surgery. The approach builds in stages:",
    bullets: [
      "Weight management — every extra kilogram adds roughly 3–4 kg of load across the knee with each step",
      "Targeted physiotherapy — quadriceps and hip-strengthening exercises that offload the joint, not generic stretching",
      "Activity modification — switching high-impact activity for swimming, cycling or an elliptical",
      "Medication — short courses of anti-inflammatories or pain relief for flare-ups, not continuous long-term use",
      "Injections — steroid for quick flare relief, hyaluronic acid (viscosupplementation) for lubrication, PRP for some patients — each has a different role and duration of benefit",
      "Surgery — considered only once the steps above no longer give an acceptable quality of life"
    ]
  },
  {
    heading: "Exercises that help — and what to avoid",
    body: "Strengthening the quadriceps and hip muscles reduces load through the knee joint itself, often easing pain without any procedure. Low-impact options like swimming, cycling and walking on flat ground are usually well tolerated. Deep squatting, kneeling for long periods, running on hard surfaces, and twisting movements under load tend to aggravate an arthritic knee and are worth avoiding or modifying."
  },
  {
    heading: "'Bone-on-bone' doesn't automatically mean surgery",
    body: "This phrase describes what an X-ray shows — complete loss of cartilage space — not how you must be treated. Plenty of patients with bone-on-bone changes manage well for years on strengthening, weight control and occasional injections. The decision to operate is based on how much pain limits your actual daily life, not the X-ray label alone."
  },
  {
    heading: "When surgery genuinely becomes the right call",
    bullets: [
      "Pain persists despite a real trial of physiotherapy, weight management and injections — not just medication alone",
      "Night pain regularly disturbs sleep",
      "Walking distance, stairs or basic daily tasks are significantly limited",
      "Visible deformity (bow legs/knock knees) is progressing"
    ]
  }
];
const faqs$2 = [
  {
    q: "What is the best home remedy for bone-on-bone knee pain?",
    a: "There is no single remedy that reverses bone-on-bone changes, but consistent quadriceps strengthening, weight management, low-impact activity and short flare-up courses of ice/anti-inflammatories together give the most reliable relief without surgery."
  },
  {
    q: "Can you live a normal life with knee arthritis?",
    a: "Many people do, for years, with the right combination of strengthening, activity modification and occasional injections. The goal of conservative treatment is exactly this — a normal, active life without rushing to surgery."
  },
  {
    q: "How long do knee injections last?",
    a: "Steroid injections typically help for weeks to a few months and are best used sparingly. Hyaluronic acid injections can offer relief for several months in suitable patients. Neither is a permanent fix, but both can meaningfully delay or avoid surgery."
  },
  {
    q: "When should I stop trying non-surgical treatment and consider replacement?",
    a: "When pain persists despite a genuine, consistent trial of the steps above — not just one injection or a few physiotherapy sessions — and it is limiting your sleep, walking or daily activities."
  }
];
const tags$2 = [
  "knee arthritis",
  "non-surgical",
  "physiotherapy",
  "injections"
];
const kneeArthritisTreatmentWithoutSurgery = {
  slug: slug$2,
  title: title$2,
  metaDescription: metaDescription$2,
  category: category$2,
  date: date$2,
  readTime: readTime$2,
  intro: intro$2,
  sections: sections$2,
  faqs: faqs$2,
  tags: tags$2
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  category: category$2,
  date: date$2,
  default: kneeArthritisTreatmentWithoutSurgery,
  faqs: faqs$2,
  intro: intro$2,
  metaDescription: metaDescription$2,
  readTime: readTime$2,
  sections: sections$2,
  slug: slug$2,
  tags: tags$2,
  title: title$2
}, Symbol.toStringTag, { value: "Module" }));
const slug$1 = "robotic-knee-replacement-cost-thane";
const title$1 = "Robotic Knee Replacement Cost in Thane & Mumbai (2026 Guide)";
const metaDescription$1 = "What does robotic knee replacement actually cost in Thane and Mumbai? An honest, no-obligation breakdown of price ranges, what drives the cost, and insurance coverage.";
const category$1 = "Joint Replacement";
const date$1 = "2026-06-28";
const readTime$1 = 6;
const intro$1 = "Cost is usually the first question patients ask once they've accepted they need a knee replacement — and the hardest to get a straight answer to. Here is an honest breakdown of what drives the price, realistic ranges, and how insurance fits in. These are indicative ranges only; your actual quote depends on your specific case and hospital.";
const sections$1 = [
  {
    heading: "Why there's no single 'price' for knee replacement",
    body: "Two patients having the 'same' surgery can be quoted very different amounts. The final bill depends on several independent variables, which is why any number quoted without examining your X-ray and discussing your case should be treated as a rough guide, not a quote.",
    bullets: [
      "Implant brand and material — established international brands cost more than domestic alternatives, with both being viable, safety-approved options",
      "Robotic system usage fee — robotic-assisted surgery typically adds to the cost of conventional replacement",
      "Single knee vs. both knees (bilateral) in one sitting",
      "Hospital tier and room category (general ward vs. private room)",
      "Length of hospital stay and any pre-existing conditions needing extra management"
    ]
  },
  {
    heading: "Realistic price ranges (India, indicative)",
    body: "As a rough orientation, conventional (traditional) total knee replacement in Thane/Mumbai is typically in the region of ₹1.5–2 lakh per knee at most accredited private hospitals, with the exact figure depending mainly on the implant chosen. Robotic-assisted knee replacement is typically in the region of ₹2.5–3 lakh per knee, the difference being largely the robotic system's usage fee on top of standard implant and hospital charges. Bilateral (both knees) costs more in total but is often more economical per knee than two separate admissions. Government and trust hospitals can be substantially lower-cost than private centres. These are indicative ranges, not quotes — we keep our pricing as transparent and reasonable as possible, and you will always know the exact, itemised cost before deciding anything, with no pressure to choose the more expensive option if it isn't right for your knee."
  },
  {
    heading: "Image-based vs. imageless robotic systems — does it change the cost?",
    body: "Not all 'robotic' knee replacement is the same, and the distinction matters for both precision and price. Image-based systems plan the surgery from a CT scan taken before the operation, building a detailed 3D model of your knee in advance — this is very precise but adds the cost of the additional scan. Imageless systems skip the pre-op CT scan entirely and instead map your knee's anatomy in real time during surgery using surface-mapping and motion-tracking — this is typically a more economical option since there's no separate scan to pay for, while still delivering the same robotic-level alignment accuracy for the great majority of knees. We use whichever is genuinely appropriate for your case, and explain the trade-off plainly — we would rather you spend less for the same good outcome than pay for a scan you don't actually need."
  },
  {
    heading: "Is robotic worth the extra cost?",
    body: "Robotic assistance improves the precision of bone cuts and implant alignment, which published data links to less soft-tissue trauma and more consistent positioning. It is one input into a good outcome — surgical technique and post-operative rehabilitation matter just as much. Many straightforward knees do just as well with traditional surgery at a lower cost, and we will tell you honestly if that's the better-value option for you rather than steering you toward the pricier route by default. See our full robotic vs. traditional comparison for the complete picture, including who robotic surgery may not suit."
  },
  {
    heading: "Is it covered by insurance or Mediclaim?",
    body: "Knee replacement is covered by most Indian health insurance and Mediclaim policies, frequently on a cashless basis at network hospitals, subject to your specific policy's waiting period for joint/orthopaedic conditions and sub-limits if any. Bring your policy document to the consultation — we can usually tell you what's likely to be covered before you commit to anything. For the documentation and process in more detail, see our insurance guide for joint replacement."
  },
  {
    heading: "Getting an accurate, no-pressure estimate",
    body: "The only way to get a number you can rely on is a clinical evaluation and standing X-ray. You will receive a written estimate covering implant, hospital and professional charges before making any decision — there is no obligation to proceed."
  }
];
const faqs$1 = [
  {
    q: "Is robotic knee replacement more expensive than traditional?",
    a: "Yes, typically — traditional knee replacement is broadly in the ₹1.5–2 lakh range and robotic in the ₹2.5–3 lakh range per knee, mainly due to the robotic system's usage fee on top of standard implant and hospital charges. The exact gap varies by hospital and implant choice; we always confirm the real number in writing before you decide."
  },
  {
    q: "What's the difference between image-based and imageless robotic systems, cost-wise?",
    a: "Image-based systems use a pre-op CT scan to plan the surgery, which adds the cost of that scan. Imageless systems map your knee during the operation itself, skipping the CT scan and its cost while still achieving robotic-level accuracy for most knees — generally the more economical robotic option."
  },
  {
    q: "Does cost differ between government and private hospitals?",
    a: "Considerably. Government and trust hospitals are usually the most economical route; private hospitals vary widely by tier and amenities."
  },
  {
    q: "Will my insurance cover the full cost?",
    a: "Most policies cover knee replacement substantially, but sub-limits, room-rent capping and co-pay clauses can mean some out-of-pocket cost. We review this with you before surgery wherever possible."
  },
  {
    q: "Is bilateral (both knees together) cheaper than two separate surgeries?",
    a: "Per-knee, yes — you save on one set of hospital and anaesthesia charges. The total bill is still higher than a single knee, and it is only offered if you are medically fit for it."
  }
];
const tags$1 = [
  "knee replacement",
  "cost",
  "insurance",
  "robotic surgery"
];
const roboticKneeReplacementCostThane = {
  slug: slug$1,
  title: title$1,
  metaDescription: metaDescription$1,
  category: category$1,
  date: date$1,
  readTime: readTime$1,
  intro: intro$1,
  sections: sections$1,
  faqs: faqs$1,
  tags: tags$1
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  category: category$1,
  date: date$1,
  default: roboticKneeReplacementCostThane,
  faqs: faqs$1,
  intro: intro$1,
  metaDescription: metaDescription$1,
  readTime: readTime$1,
  sections: sections$1,
  slug: slug$1,
  tags: tags$1,
  title: title$1
}, Symbol.toStringTag, { value: "Module" }));
const slug = "robotic-knee-replacement-recovery";
const title = "Robotic Knee Replacement: What to Expect and Recovery Timeline";
const metaDescription = "How robotic knee replacement works, why it enables faster recovery, and a week-by-week recovery timeline from an orthopaedic surgeon in Thane.";
const category = "Joint Replacement";
const date = "2026-06-12";
const readTime = 6;
const intro = "Robotic-assisted knee replacement combines surgical expertise with computer-guided precision, allowing implant alignment within fractions of a millimetre, smaller incisions and less soft-tissue damage.";
const sections = [
  {
    heading: "How robotic surgery is different",
    body: "A CT-based or imageless 3D plan of your knee is created before surgery. During the operation, the robotic arm keeps bone cuts exactly on plan, sparing healthy bone and ligaments. The result is a more natural-feeling knee and typically less post-operative pain."
  },
  {
    heading: "Typical recovery timeline",
    bullets: [
      "Day 0–1: Walking with support, often within hours of surgery",
      "Week 1–2: Staircase training, daily physiotherapy, most patients home by day 2–3",
      "Week 3–6: Walking unaided indoors, returning to desk work",
      "Month 3: Most daily activities pain-free; continued strengthening",
      "Month 6–12: Full benefit realised, including travel and recreational activity"
    ]
  },
  {
    heading: "Who is a candidate?",
    body: "Patients with advanced arthritis whose pain persists despite medication, physiotherapy and injections. Age alone is not a barrier — fitness for anaesthesia and motivation for rehabilitation matter more."
  }
];
const faqs = [
  {
    q: "Is robotic knee replacement safer than conventional surgery?",
    a: "The robot does not operate by itself — it ensures the surgical plan is executed precisely. Studies show more accurate alignment, less soft-tissue injury and quicker early recovery compared with conventional techniques."
  },
  {
    q: "How long does a robotic knee implant last?",
    a: "Modern implants placed with accurate alignment are expected to last 20–25 years or more, which is why precision at the time of surgery matters so much."
  },
  {
    q: "When can I climb stairs after knee replacement?",
    a: "Most patients climb stairs with support within the first week, and independently by 3–6 weeks, depending on muscle strength and physiotherapy compliance."
  }
];
const tags = [
  "knee replacement",
  "robotic surgery",
  "recovery"
];
const roboticKneeReplacementRecovery = {
  slug,
  title,
  metaDescription,
  category,
  date,
  readTime,
  intro,
  sections,
  faqs,
  tags
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  category,
  date,
  default: roboticKneeReplacementRecovery,
  faqs,
  intro,
  metaDescription,
  readTime,
  sections,
  slug,
  tags,
  title
}, Symbol.toStringTag, { value: "Module" }));
const mods = /* @__PURE__ */ Object.assign({ "../content/articles/acl-surgery-recovery-timeline.json": __vite_glob_0_0, "../content/articles/acl-tear-symptoms-treatment.json": __vite_glob_0_1, "../content/articles/ankle-sprain-vs-fracture.json": __vite_glob_0_2, "../content/articles/early-signs-knee-arthritis.json": __vite_glob_0_3, "../content/articles/fracture-healing-surgery.json": __vite_glob_0_4, "../content/articles/heel-pain-plantar-fasciitis.json": __vite_glob_0_5, "../content/articles/hip-replacement-signs.json": __vite_glob_0_6, "../content/articles/joint-replacement-insurance-india.json": __vite_glob_0_7, "../content/articles/knee-arthritis-treatment-without-surgery.json": __vite_glob_0_8, "../content/articles/robotic-knee-replacement-cost-thane.json": __vite_glob_0_9, "../content/articles/robotic-knee-replacement-recovery.json": __vite_glob_0_10 });
const ARTICLES = Object.values(mods).map((m) => m.default).sort((a, b) => new Date(b.date || "2025-01-01") - new Date(a.date || "2025-01-01"));
ARTICLES.map((a) => `/education/${a.slug}`);
const groups = [
  {
    title: "Core Pages",
    icon: "M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10",
    links: [
      { to: "/", label: "Home", note: "Practice overview & featured specialties" },
      { to: "/about", label: "About — Credentials & Biography", note: "Training, fellowships & philosophy" },
      { to: "/book", label: "Appointment Booking", note: "WhatsApp-confirmed bookings" }
    ]
  },
  {
    title: "Clinical Specialties",
    icon: "M12 3v18M3 12h18",
    links: [
      { to: "/specialties/joint-replacement", label: "Joint Replacement (Hip & Knee)", note: "Robotic-assisted joint restoration" },
      { to: "/specialties/foot-ankle", label: "Foot & Ankle Surgery", note: "Deformity, trauma & sports injuries of the foot" },
      { to: "/specialties/sports-arthroscopy", label: "Sports Injuries & Arthroscopy", note: "ACL reconstruction & keyhole surgery" },
      { to: "/specialties/trauma-fracture", label: "Trauma & Fracture Management", note: "Complex fracture & nonunion care" }
    ]
  },
  {
    title: "Patient Education",
    icon: "M4 19V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2zm0 0a2 2 0 0 1 2-2h13",
    links: [
      { to: "/education", label: "Patient Education Hub", note: "All articles & guides" },
      ...ARTICLES.map((a) => ({ to: `/education/${a.slug}`, label: a.title, note: a.category }))
    ]
  },
  {
    title: "Consulting Location",
    icon: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z",
    links: [
      { to: "/book", label: "Joshi's Neurotrauma Centre", note: "Khopat, Thane West — hours, directions & booking" }
    ]
  }
];
function Sitemap() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Sitemap",
        description: "Complete page directory for drniranjanghag.com — core pages, clinical specialties, patient education articles and consulting location.",
        path: "/sitemap"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-5xl px-4 py-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-serif text-4xl font-bold text-slate-900", children: "Sitemap" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-slate-600", children: "Every page on this site, organized for quick scanning." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-8 md:grid-cols-2", children: groups.map((g, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxs(
        "section",
        {
          "aria-labelledby": `sm-${g.title}`,
          className: "glass rounded-3xl p-7 transition-shadow duration-300 hover:shadow-glass-lg",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-gold/30 to-brand-brown/20 text-brand-brown", "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: g.icon }) }) }),
              /* @__PURE__ */ jsx("h2", { id: `sm-${g.title}`, className: "font-serif text-xl font-bold text-slate-900", children: g.title })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "mt-5 divide-y divide-slate-100", children: g.links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: l.to,
                className: "group block rounded-xl py-3 px-2 transition-colors hover:bg-white/60",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-slate-800 group-hover:text-brand-brown", children: l.label }),
                  /* @__PURE__ */ jsx("span", { className: "mt-0.5 block text-xs text-slate-500", children: l.note })
                ]
              }
            ) }, l.to + l.label)) })
          ]
        }
      ) }, g.title)) })
    ] })
  ] });
}
function Education() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Patient Education Hub",
        description: "Clear, surgeon-written guides on knee arthritis, joint replacement, ACL tears, heel pain, ankle injuries and fracture healing — from Dr. Niranjan Ghag, Thane.",
        path: "/education"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden px-4 py-16", children: [
      /* @__PURE__ */ jsx("div", { className: "blob -right-24 top-0 h-72 w-72 bg-brand-gold/15 animate-float-slow", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Patient Hub" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-2 font-serif text-4xl font-bold text-slate-900", children: "Patient Education" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-slate-600", children: "Surgeon-written guides that help you understand your condition before you ever step into the clinic." }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: ARTICLES.map((a, i) => /* @__PURE__ */ jsx(Reveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/education/${a.slug}`,
            className: "glass group flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glass-lg",
            children: [
              /* @__PURE__ */ jsx("span", { className: "inline-flex w-fit rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-brown", children: a.category }),
              /* @__PURE__ */ jsx("h2", { className: "mt-4 font-serif text-xl font-bold leading-snug text-slate-900 group-hover:text-brand-brown", children: a.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3", children: a.intro }),
              /* @__PURE__ */ jsxs("span", { className: "mt-5 text-xs font-medium text-slate-400", children: [
                a.readTime,
                " min read"
              ] })
            ]
          }
        ) }, a.slug)) })
      ] })
    ] })
  ] });
}
const LABELS = {
  en: {
    faq: "Frequently Asked Questions",
    minRead: "min read",
    by: "By",
    ctaTitle: "Worried about your symptoms?",
    ctaBody: "A clinical evaluation gives you clear answers and the simplest effective treatment plan.",
    ctaBtn: "Book a Consultation"
  },
  mr: {
    faq: "नेहमी विचारले जाणारे प्रश्न",
    minRead: "मिनिटांचे वाचन",
    by: "लेखक:",
    ctaTitle: "तुमच्या लक्षणांबद्दल काळजी वाटते?",
    ctaBody: "क्लिनिकल तपासणीने स्पष्ट उत्तरे आणि सर्वात सोपी, प्रभावी उपचार योजना मिळते.",
    ctaBtn: "अपॉइंटमेंट बुक करा"
  },
  hi: {
    faq: "अक्सर पूछे जाने वाले प्रश्न",
    minRead: "मिनट में पढ़ें",
    by: "लेखक:",
    ctaTitle: "अपने लक्षणों को लेकर चिंतित हैं?",
    ctaBody: "क्लिनिकल जाँच से स्पष्ट जवाब और सबसे आसान, प्रभावी इलाज योजना मिलती है।",
    ctaBtn: "अपॉइंटमेंट बुक करें"
  }
};
const TRANSLATIONS = {
  mr: {
    "early-signs-knee-arthritis": {
      title: "गुडघ्याच्या संधिवाताची सुरुवातीची लक्षणे: या लक्षणांकडे दुर्लक्ष करू नका",
      intro: "जिने चढताना किंवा खुर्चीतून उठताना गुडघा दुखतो का? हे 'फक्त वयामुळे' असेलच असे नाही. अनेक रुग्ण सुरुवातीची लक्षणे आपोआप बरी होतील या आशेने दुर्लक्ष करतात, पण त्यामुळे आजार वाढत जातो.",
      sections: [
        {
          heading: "कोणत्या लक्षणांकडे लक्ष द्यावे",
          body: "गुडघ्याचा संधिवात अचानक सुरू होत नाही; तो हळूहळू वाढतो — म्हणूनच त्याकडे दुर्लक्ष होते.",
          bullets: [
            "हालचाल करताना किंवा वजन पडताना वेदना",
            "सांध्याभोवती सूज व जडपणा, विशेषतः सकाळी",
            "बसणे-उठणे, जिने चढणे यांसारख्या दैनंदिन कृतींमध्ये अडचण",
            "गुडघा अस्थिर वाटणे किंवा कट-कट आवाज येणे"
          ]
        },
        {
          heading: "घरी काय करता येईल",
          body: "सुरुवातीच्या टप्प्यात योग्य काळजीने आजाराची प्रगती लक्षणीयरीत्या थांबवता येते.",
          bullets: [
            "त्रास वाढल्यास विश्रांती, बर्फ, बँडेज व पाय उंच ठेवणे (RICE)",
            "फिजिओथेरपी व मांडीच्या स्नायूंचे व्यायाम",
            "वजन नियंत्रण — प्रत्येक अतिरिक्त किलो गुडघ्यावर ३–४ किलो भार टाकतो",
            "पोहणे, सायकलिंगसारखे हलके व्यायाम"
          ]
        },
        {
          heading: "तज्ज्ञांना कधी भेटावे",
          body: "वेदना काही आठवड्यांपेक्षा जास्त राहिल्यास, झोपमोड होत असल्यास किंवा दैनंदिन कामांत अडथळा येत असल्यास, क्लिनिकल तपासणी व उभ्या स्थितीतील एक्स-रेने संधिवाताची नेमकी पातळी समजते. लवकर निदान म्हणजे सोपे उपचार — फिजिओथेरपी व इंजेक्शनपासून गरज पडल्यास रोबोटिक गुडघा प्रत्यारोपणापर्यंत."
        }
      ],
      faqs: [
        { q: "सुरुवातीचा संधिवात पूर्ण बरा होतो का?", a: "झीज झालेली कूर्चा पूर्ववत होत नाही, पण फिजिओथेरपी, वजन नियंत्रण व जीवनशैलीतील बदलांनी आजाराची प्रगती थांबवता येते आणि अनेक वर्षे शस्त्रक्रियेशिवाय वेदनामुक्त राहता येते." },
        { q: "संधिवात झाला म्हणजे गुडघा बदलावाच लागतो का?", a: "नाही. बहुतेक सुरुवातीच्या व मध्यम टप्प्यांत शस्त्रक्रियेशिवाय उपचार होतात. इतर उपायांनी आराम न मिळाल्यासच प्रत्यारोपणाचा विचार होतो." },
        { q: "ठाण्यात गुडघेदुखीसाठी कोणत्या डॉक्टरांना भेटावे?", a: "अस्थिरोग तज्ज्ञ (ऑर्थोपेडिक सर्जन) तपासणी व एक्स-रेद्वारे निदान करतात. डॉ. निरंजन घाग जोशी न्यूरोट्रॉमा सेंटर, खोपट, ठाणे (प.) येथे उपलब्ध असतात." }
      ]
    },
    "robotic-knee-replacement-recovery": {
      title: "रोबोटिक गुडघा प्रत्यारोपण: काय अपेक्षा ठेवावी आणि रिकव्हरी टाइमलाइन",
      intro: "रोबोटिक-असिस्टेड गुडघा प्रत्यारोपणात सर्जनचे कौशल्य आणि संगणकीय अचूकता एकत्र येतात — इम्प्लांटची मिलिमीटरच्या अंशापर्यंत अचूक जुळणी, लहान छेद आणि कमी ऊतींची हानी.",
      sections: [
        {
          heading: "रोबोटिक शस्त्रक्रिया वेगळी कशी",
          body: "शस्त्रक्रियेपूर्वी तुमच्या गुडघ्याचा थ्री-डी आराखडा तयार होतो. ऑपरेशनदरम्यान रोबोटिक आर्म हाडांचे छेद नेमके आराखड्याप्रमाणे ठेवतो, निरोगी हाड व लिगामेंट्स वाचवतो. परिणाम — अधिक नैसर्गिक वाटणारा गुडघा आणि सहसा कमी वेदना."
        },
        {
          heading: "साधारण रिकव्हरी टाइमलाइन",
          bullets: [
            "दिवस ०–१: आधार घेऊन चालणे, अनेकदा शस्त्रक्रियेनंतर काही तासांतच",
            "आठवडा १–२: जिन्याचा सराव, दररोज फिजिओथेरपी; बहुतेक रुग्ण २–३ दिवसांत घरी",
            "आठवडा ३–६: घरात आधाराशिवाय चालणे, बैठे काम पुन्हा सुरू",
            "महिना ३: बहुतेक दैनंदिन कामे वेदनारहित",
            "महिना ६–१२: प्रवास व छंदांसह पूर्ण लाभ"
          ]
        },
        {
          heading: "कोणासाठी योग्य?",
          body: "औषधे, फिजिओथेरपी व इंजेक्शननंतरही वेदना कायम असलेल्या प्रगत संधिवाताच्या रुग्णांसाठी. केवळ वय अडथळा नाही — भूल सहन करण्याची क्षमता आणि पुनर्वसनाची तयारी अधिक महत्त्वाची."
        }
      ],
      faqs: [
        { q: "रोबोटिक शस्त्रक्रिया पारंपरिक पद्धतीपेक्षा सुरक्षित आहे का?", a: "रोबोट स्वतः शस्त्रक्रिया करत नाही — तो सर्जनचा आराखडा अचूक अंमलात आणतो. अभ्यासांनुसार जुळणी अधिक अचूक, ऊतींची हानी कमी आणि सुरुवातीची रिकव्हरी जलद होते." },
        { q: "इम्प्लांट किती वर्षे टिकते?", a: "अचूक जुळणीसह बसवलेले आधुनिक इम्प्लांट २०–२५ वर्षे किंवा त्याहून अधिक टिकणे अपेक्षित आहे." },
        { q: "गुडघा बदलल्यानंतर जिने कधी चढता येतात?", a: "बहुतेक रुग्ण पहिल्या आठवड्यात आधाराने आणि ३–६ आठवड्यांत स्वतंत्रपणे जिने चढतात." }
      ]
    },
    "acl-tear-symptoms-treatment": {
      title: "ACL फाटणे: लक्षणे, उपचार पर्याय आणि खेळात परतणे",
      intro: "ACL (गुडघ्यातील मुख्य लिगामेंट) फाटणे ही सर्वात सामान्य गंभीर क्रीडा दुखापतींपैकी एक — पाय रोवलेला असताना अचानक वळणे, 'पॉप' असा आवाज आणि काही तासांत सुजलेला गुडघा.",
      sections: [
        {
          heading: "ठळक लक्षणे",
          bullets: [
            "दुखापतीच्या क्षणी 'पॉप' आवाज वा तशी जाणीव",
            "२–६ तासांत वेगाने सूज येणे",
            "वळताना गुडघा 'निसटल्यासारखा' वाटणे",
            "जिने वा खडबडीत जमिनीवर गुडघ्यावर विश्वास न वाटणे"
          ]
        },
        {
          heading: "शस्त्रक्रिया करावी की नाही?",
          body: "प्रत्येक ACL फाटण्यासाठी ऑपरेशन लागत नाही. कमी हालचालींची गरज असलेल्या व स्थिर गुडघ्याच्या रुग्णांना फिजिओथेरपी पुरू शकते. खेळाडू व वारंवार गुडघा निसटणाऱ्यांसाठी आर्थ्रोस्कोपिक (दुर्बिणीद्वारे) ACL पुनर्रचना उपयुक्त — ग्राफ्ट वापरून लिगामेंट पुन्हा बांधली जाते."
        },
        {
          heading: "खेळात परतणे",
          body: "आधुनिक आर्थ्रोस्कोपिक पुनर्रचना व शास्त्रशुद्ध पुनर्वसनासह साधारण ३ महिन्यांत जॉगिंग, ६ महिन्यांत खेळ-विशिष्ट सराव आणि ताकद-स्थिरतेच्या चाचण्या उत्तीर्ण झाल्यावर ८–१२ महिन्यांत पूर्ण स्पर्धात्मक खेळ."
        }
      ],
      faqs: [
        { q: "ACL आपोआप जुळते का?", a: "पूर्ण फाटलेली ACL रक्तपुरवठा कमी असल्याने स्वतः जुळत नाही. अर्धवट फाटणे व कमी गरजांच्या गुडघ्यांत फिजिओथेरपीने भागू शकते." },
        { q: "ACL ऑपरेशन मोठे असते का?", a: "नाही. हे दुर्बिणीद्वारे लहान छेदांतून होते; सहसा अल्प मुक्काम आणि त्याच किंवा दुसऱ्या दिवशी चालण्याची परवानगी मिळते." },
        { q: "उपचार लांबवल्यास काय होते?", a: "गुडघा वारंवार निसटल्याने मेनिस्कस व कूर्चेचे नुकसान होऊन संधिवात लवकर येऊ शकतो. लवकर तपासणी उर्वरित गुडघ्याचे रक्षण करते." }
      ]
    },
    "heel-pain-plantar-fasciitis": {
      title: "टाचदुखी आणि प्लांटर फॅसायटिस: कारणे, उपाय व तज्ज्ञांना कधी भेटावे",
      intro: "सकाळी पहिले पाऊल टाकताच टाचेत तीव्र, टोचल्यासारखी वेदना — हे प्लांटर फॅसायटिसचे (तळपायाच्या पट्टीची सूज) वैशिष्ट्य आहे. फूट क्लिनिकमध्ये येण्याच्या सर्वात सामान्य कारणांपैकी एक.",
      sections: [
        {
          heading: "हे का होते",
          bullets: [
            "कठीण जमिनीवर दीर्घकाळ उभे राहणे वा चालणे",
            "सपाट तळवे किंवा खूप उंच कमान",
            "पोटरीचे आखडलेले स्नायू व अचानक वाढवलेला व्यायाम",
            "आधार नसलेली पादत्राणे व जास्त वजन"
          ]
        },
        {
          heading: "खरोखर काय उपयोगी पडते",
          body: "९०% हून अधिक रुग्ण शस्त्रक्रियेशिवाय बरे होतात — पण काही आठवडे सातत्याने उपचार केल्यासच.",
          bullets: [
            "तळपाय व पोटरीचे दररोज स्ट्रेचिंग",
            "सिलिकॉन हील कप वा कमानीला आधार देणारे इनसोल",
            "हालचालीत बदल व बर्फाने मसाज",
            "हट्टी सकाळच्या वेदनेसाठी नाईट स्प्लिंट"
          ]
        },
        {
          heading: "तज्ज्ञांना कधी भेटावे",
          body: "६–८ आठवड्यांच्या घरगुती उपायांनंतरही वेदना राहिल्यास फूट-अँकल तज्ज्ञ निदान निश्चित करतात, स्ट्रेस फ्रॅक्चर वा नस दबणे वगळतात आणि शॉकवेव्ह थेरपी वा इंजेक्शनसारखे पर्याय देतात. शस्त्रक्रिया क्वचितच लागते."
        }
      ],
      faqs: [
        { q: "टाचेला हाड वाढले (हील स्पर) म्हणून दुखते का?", a: "सहसा नाही. वेदना नसलेल्या अनेकांच्या एक्स-रेतही स्पर दिसतो. वेदना सूजलेल्या प्लांटर फॅसियामुळे असते, म्हणून उपचार त्यावरच केंद्रित असतात." },
        { q: "किती दिवसांत बरे होते?", a: "नियमित स्ट्रेचिंग व योग्य पादत्राणांनी बहुतेक रुग्णांना ६–१२ आठवड्यांत लक्षणीय आराम मिळतो; पूर्ण बरे होण्यास काही महिने लागू शकतात." },
        { q: "MRI ची गरज असते का?", a: "क्वचित. बहुतेक वेळा क्लिनिकल तपासणीनेच निदान होते. लक्षणे वेगळी असल्यास वा उपचारांनी सुधारणा न झाल्यासच इमेजिंग केले जाते." }
      ]
    },
    "ankle-sprain-vs-fracture": {
      title: "घोटा मुरगळला की हाड मोडले? फरक कसा ओळखावा",
      intro: "मुरगळलेले बहुतेक घोटे साध्या काळजीने बरे होणारे लिगामेंट स्प्रेन असतात. पण काही फ्रॅक्चर वा गंभीर लिगामेंट फाटणे असते — त्यांना साधा मुरगळा समजून उपचार केल्यास दीर्घकालीन वेदना व अस्थिरता येते.",
      sections: [
        {
          heading: "फ्रॅक्चरची शक्यता दर्शवणारी लक्षणे",
          bullets: [
            "दुखापतीनंतर लगेच चार पावलेही टाकता न येणे",
            "घोट्याच्या हाडांवर दाबल्यास तीव्र वेदना",
            "वेगाने वाढणारी सूज वा दिसणारा वाकडेपणा",
            "पावलात बधिरपणा वा रंग बदलणे"
          ]
        },
        {
          heading: "योग्य प्रथमोपचार",
          body: "RICE पाळा — विश्रांती, १५–२० मिनिटे बर्फ, क्रेप बँडेज व पाय हृदयाच्या उंचीवर. पहिल्या ४८ तासांत मालिश, शेक व तीव्र वेदना सहन करत चालणे टाळा."
        },
        {
          heading: "योग्य तपासणी का महत्त्वाची",
          body: "वारंवार होणारे 'किरकोळ' मुरगळणे म्हणजे अनेकदा उपचार न झालेली लिगामेंट दुखापत. लवकर फिजिओथेरपी, ब्रेस व गरज पडल्यास दुर्बिणीद्वारे लिगामेंट दुरुस्तीने कायमची अस्थिरता टाळता येते. वजन घेऊन काढलेला एक्स-रे काही मिनिटांत निर्णय देतो."
        }
      ],
      faqs: [
        { q: "हाड मोडले असेल तर चालता येते का?", a: "कधीकधी होय — म्हणूनच 'चालता येतंय म्हणजे मोडलं नाही' हा समज चुकीचा. न सरकलेल्या फ्रॅक्चरमध्ये वेदनेसह चालता येते, पण योग्य बरे होण्यासाठी संरक्षण आवश्यक असते." },
        { q: "मुरगळलेला घोटा किती दिवसांत बरा होतो?", a: "सौम्य मुरगळणे १–३ आठवडे; मध्यम ४–६ आठवडे. ६ आठवड्यांनंतरही वेदना राहिल्यास तज्ज्ञ तपासणी आवश्यक." },
        { q: "प्रत्येक घोट्याच्या फ्रॅक्चरला शस्त्रक्रिया लागते का?", a: "नाही. स्थिर, नीट जुळलेली फ्रॅक्चर प्लास्टर वा बूटमध्ये बरी होतात. सांध्याची पृष्ठभाग सरकलेली असल्यास वा घोटा अस्थिर असल्यासच शस्त्रक्रिया लागते." }
      ]
    },
    "hip-replacement-signs": {
      title: "हिप रिप्लेसमेंट: ही ५ लक्षणे गरज दर्शवू शकतात",
      intro: "खुब्याचा संधिवात अनेकदा जांघेतील ताण, मांडीदुखी किंवा गुडघेदुखीसारखा भासतो. निदान स्पष्ट होईपर्यंत अनेक रुग्ण आवडत्या गोष्टी सोडून देतात. आधुनिक टोटल हिप रिप्लेसमेंट ही वैद्यकशास्त्रातील सर्वात यशस्वी शस्त्रक्रियांपैकी एक आहे.",
      sections: [
        {
          heading: "खुबा हेच कारण असल्याची ५ लक्षणे",
          bullets: [
            "चालताना जांघेत वा मांडीच्या पुढील भागात वेदना, कधी गुडघ्यापर्यंत",
            "जडपणा — मोजे घालणे, नखे कापणे, मांडी घालणे कठीण",
            "चालण्याचे अंतर महिन्यागणिक कमी होणे",
            "रात्री झोपमोड करणारी वेदना",
            "तुमच्या आधी कुटुंबीयांना जाणवणारी लंगड"
          ]
        },
        {
          heading: "शस्त्रक्रियेने काय साधते",
          body: "झिजलेला बॉल-सॉकेट सांधा गुळगुळीत, टिकाऊ इम्प्लांटने बदलला जातो. रुग्ण सहसा त्याच वा दुसऱ्या दिवशी चालतात, आठवड्यात जिने चढतात — विश्वासार्ह वेदनामुक्ती आणि परत मिळालेले स्वावलंबन."
        },
        {
          heading: "वेळ महत्त्वाची",
          body: "खूप उशीर केल्यास स्नायू कमजोर होतात व हाडांची गुणवत्ता घटते, ज्याने शस्त्रक्रिया व पुनर्वसन कठीण होते. औषधे व फिजिओथेरपीनंतरही वेदना आयुष्य मर्यादित करत असल्यास उभ्या स्थितीतील एक्स-रेसह तपासणी करा."
        }
      ],
      faqs: [
        { q: "हिप इम्प्लांट किती टिकते?", a: "आधुनिक बेअरिंग्ज २०–२५ वर्षे वा अधिक टिकणे अपेक्षित — त्यामुळे गरज असल्यास तरुण, सक्रिय रुग्णांसाठीही योग्य." },
        { q: "नंतर मांडी घालून बसता येते का?", a: "आधुनिक इम्प्लांट व तंत्रांमुळे अनेक रुग्णांना शक्य होते; इम्प्लांटचा प्रकार व हाडांच्या स्थितीनुसार वैयक्तिक सल्ला दिला जातो." },
        { q: "शस्त्रक्रिया खूप वेदनादायक असते का?", a: "बहुपर्यायी वेदना-व्यवस्थापन व कमी छेदाच्या तंत्रांमुळे बहुतेक रुग्ण २४ तासांत आरामात चालू लागतात." }
      ]
    },
    "fracture-healing-surgery": {
      title: "काही फ्रॅक्चरना शस्त्रक्रिया का लागते? हाड जुळण्याची प्रक्रिया",
      intro: "हाड हे स्वतः नव्याने तयार होऊन जुळणाऱ्या शरीरातील मोजक्या ऊतींपैकी एक — पण तुटलेली टोके नीट जुळवून स्थिर ठेवली तरच. हेच तत्त्व ठरवते की प्लास्टर पुरेसे की ऑपरेशन गरजेचे.",
      sections: [
        {
          heading: "प्लास्टर कधी पुरते",
          body: "न सरकलेली वा किंचित सरकलेली, नीट जुळलेली फ्रॅक्चर प्लास्टर वा ब्रेसमध्ये विश्वासार्हपणे जुळतात. लहान मुलांची हाडे वाढीसोबत स्वतः आकार सुधारत असल्याने विशेष चांगली जुळतात."
        },
        {
          heading: "शस्त्रक्रिया कधी लागते",
          bullets: [
            "प्लास्टरमध्ये स्थिर न राहणारी सरकलेली फ्रॅक्चर",
            "सांध्याच्या पृष्ठभागाची फ्रॅक्चर — २ मिमी पायरीही संधिवात वाढवते",
            "मांडी व पायाच्या काही हाडांची फ्रॅक्चर, जिथे प्लास्टर म्हणजे महिनोनमहिने अंथरुणात",
            "उघडी (कंपाउंड) फ्रॅक्चर व नस/रक्तवाहिनी दुखापतीसह असलेली फ्रॅक्चर"
          ]
        },
        {
          heading: "मालयुनियन आणि नॉनयुनियन",
          body: "वाकडे जुळलेले (मालयुनियन) वा न जुळलेले (नॉनयुनियन) हाड सतत वेदना व विकृती देते. हे दुरुस्त होते — पुनर्जुळणी, मजबूत फिक्सेशन व गरजेनुसार बोन ग्राफ्टिंगने. लवकर तज्ज्ञ उपचार बहुतेक प्रकरणे टाळतात."
        }
      ],
      faqs: [
        { q: "फ्रॅक्चर जुळायला किती वेळ लागतो?", a: "प्रौढांची बहुतेक फ्रॅक्चर ६–१२ आठवड्यांत जुळतात — हाड, रक्तपुरवठा, स्थिरता आणि धूम्रपान/मधुमेहासारख्या घटकांवर अवलंबून." },
        { q: "प्लेट-स्क्रू नंतर काढावे लागतात का?", a: "सहसा नाही — इम्प्लांट सुरक्षितपणे आत राहण्यासाठीच बनवलेले असतात. त्रास देत असल्यासच हाड जुळल्यानंतर काढण्याचा विचार होतो." },
        { q: "पायात इम्प्लांट असताना चालता येते का?", a: "होय. आधुनिक फिक्सेशन लवकर हालचालीसाठीच असते; अनेकदा लवकर वजन देणेही हाड जुळण्यास मदत करते." }
      ]
    }
  },
  hi: {
    "early-signs-knee-arthritis": {
      title: "घुटने के गठिया के शुरुआती लक्षण: इन्हें नज़रअंदाज़ न करें",
      intro: "सीढ़ियाँ चढ़ते या कुर्सी से उठते समय घुटने में दर्द होता है? यह 'सिर्फ़ उम्र' नहीं हो सकती। कई मरीज़ शुरुआती लक्षणों को अनदेखा करते हैं, जिससे समस्या समय के साथ बढ़ती जाती है।",
      sections: [
        {
          heading: "किन लक्षणों पर ध्यान दें",
          body: "घुटने का गठिया अचानक नहीं, धीरे-धीरे बढ़ता है — इसीलिए अनदेखा रह जाता है।",
          bullets: [
            "चलने या वज़न पड़ने पर दर्द",
            "जोड़ के आसपास सूजन और जकड़न, ख़ासकर सुबह",
            "उठने-बैठने, सीढ़ियाँ चढ़ने जैसी रोज़मर्रा की गतिविधियों में कठिनाई",
            "घुटने का अस्थिर लगना या कट-कट की आवाज़"
          ]
        },
        {
          heading: "घर पर क्या करें",
          body: "शुरुआती चरण में सही देखभाल से बीमारी की प्रगति काफ़ी धीमी की जा सकती है।",
          bullets: [
            "दर्द बढ़ने पर आराम, बर्फ़, पट्टी और पैर ऊँचा रखना (RICE)",
            "फिजियोथेरेपी और जाँघ की मांसपेशियों के व्यायाम",
            "वज़न नियंत्रण — हर अतिरिक्त किलो घुटने पर ३–४ किलो भार डालता है",
            "तैराकी, साइकिलिंग जैसे हल्के व्यायाम"
          ]
        },
        {
          heading: "विशेषज्ञ से कब मिलें",
          body: "दर्द कुछ हफ़्तों से ज़्यादा रहे, नींद ख़राब करे या रोज़मर्रा के काम सीमित करे, तो क्लिनिकल जाँच और खड़े होकर लिया गया एक्स-रे गठिया की सही स्थिति बताता है। जल्दी निदान यानी आसान इलाज — फिजियोथेरेपी और इंजेक्शन से लेकर ज़रूरत पड़ने पर रोबोटिक घुटना प्रत्यारोपण तक।"
        }
      ],
      faqs: [
        { q: "क्या शुरुआती गठिया पूरी तरह ठीक हो सकता है?", a: "घिसा हुआ कार्टिलेज वापस नहीं आता, पर फिजियोथेरेपी, वज़न नियंत्रण और जीवनशैली में बदलाव से प्रगति रोकी जा सकती है और वर्षों तक बिना सर्जरी दर्द-मुक्त रहा जा सकता है।" },
        { q: "क्या गठिया में घुटना बदलवाना ही पड़ता है?", a: "नहीं। अधिकांश शुरुआती और मध्यम मामलों का इलाज बिना सर्जरी होता है। अन्य उपायों से आराम न मिलने पर ही प्रत्यारोपण पर विचार होता है।" },
        { q: "ठाणे में घुटने के दर्द के लिए किस डॉक्टर से मिलें?", a: "हड्डी रोग विशेषज्ञ (ऑर्थोपेडिक सर्जन) जाँच और एक्स-रे से निदान करते हैं। डॉ. निरंजन घाग जोशी न्यूरोट्रॉमा सेंटर, खोपट, ठाणे (प.) में उपलब्ध हैं।" }
      ]
    },
    "robotic-knee-replacement-recovery": {
      title: "रोबोटिक घुटना प्रत्यारोपण: क्या उम्मीद करें और रिकवरी टाइमलाइन",
      intro: "रोबोटिक-असिस्टेड घुटना प्रत्यारोपण में सर्जन का कौशल और कंप्यूटर की सटीकता मिलती है — इम्प्लांट की मिलीमीटर-स्तर की सटीक फिटिंग, छोटा चीरा और कम ऊतक क्षति।",
      sections: [
        {
          heading: "रोबोटिक सर्जरी अलग कैसे है",
          body: "सर्जरी से पहले आपके घुटने का थ्री-डी प्लान बनता है। ऑपरेशन के दौरान रोबोटिक आर्म हड्डी की कटाई को ठीक प्लान के अनुसार रखता है, स्वस्थ हड्डी और लिगामेंट बचाता है। नतीजा — ज़्यादा प्राकृतिक महसूस होने वाला घुटना और आमतौर पर कम दर्द।"
        },
        {
          heading: "सामान्य रिकवरी टाइमलाइन",
          bullets: [
            "दिन ०–१: सहारे से चलना, अक्सर सर्जरी के कुछ घंटों में",
            "हफ़्ता १–२: सीढ़ियों का अभ्यास, रोज़ाना फिजियोथेरेपी; अधिकांश मरीज़ २–३ दिन में घर",
            "हफ़्ता ३–६: घर में बिना सहारे चलना, डेस्क वर्क शुरू",
            "महीना ३: अधिकांश दैनिक काम दर्द-रहित",
            "महीना ६–१२: यात्रा और शौक़ सहित पूरा लाभ"
          ]
        },
        {
          heading: "किसके लिए उपयुक्त?",
          body: "दवा, फिजियोथेरेपी और इंजेक्शन के बाद भी दर्द बने रहने वाले एडवांस गठिया के मरीज़ों के लिए। सिर्फ़ उम्र बाधा नहीं — एनेस्थीसिया की फिटनेस और पुनर्वास की तैयारी ज़्यादा मायने रखती है।"
        }
      ],
      faqs: [
        { q: "क्या रोबोटिक सर्जरी पारंपरिक से सुरक्षित है?", a: "रोबोट खुद ऑपरेशन नहीं करता — वह सर्जन के प्लान को सटीकता से लागू करता है। अध्ययनों में अलाइनमेंट ज़्यादा सटीक, ऊतक क्षति कम और शुरुआती रिकवरी तेज़ पाई गई है।" },
        { q: "इम्प्लांट कितने साल चलता है?", a: "सटीक अलाइनमेंट के साथ लगाए गए आधुनिक इम्प्लांट २०–२५ साल या उससे अधिक चलने की उम्मीद है।" },
        { q: "घुटना बदलने के बाद सीढ़ियाँ कब चढ़ सकते हैं?", a: "अधिकांश मरीज़ पहले हफ़्ते में सहारे से और ३–६ हफ़्तों में स्वतंत्र रूप से सीढ़ियाँ चढ़ते हैं।" }
      ]
    },
    "acl-tear-symptoms-treatment": {
      title: "ACL टियर: लक्षण, इलाज के विकल्प और खेल में वापसी",
      intro: "ACL (घुटने का मुख्य लिगामेंट) फटना सबसे आम गंभीर खेल चोटों में से है — जमे पैर पर अचानक मुड़ना, 'पॉप' की आवाज़ और कुछ घंटों में सूजा हुआ घुटना।",
      sections: [
        {
          heading: "मुख्य लक्षण",
          bullets: [
            "चोट के समय 'पॉप' की आवाज़ या एहसास",
            "२–६ घंटों में तेज़ी से सूजन",
            "मुड़ते समय घुटने का 'निकल जाना'",
            "सीढ़ियों या ऊबड़-खाबड़ ज़मीन पर घुटने पर भरोसा न होना"
          ]
        },
        {
          heading: "सर्जरी करें या नहीं?",
          body: "हर ACL टियर में ऑपरेशन ज़रूरी नहीं। कम सक्रिय और स्थिर घुटने वाले मरीज़ों के लिए फिजियोथेरेपी काफ़ी हो सकती है। खिलाड़ियों और बार-बार घुटना निकलने वालों के लिए आर्थ्रोस्कोपिक (दूरबीन) ACL रिकंस्ट्रक्शन उपयुक्त — ग्राफ्ट से लिगामेंट दोबारा बनाई जाती है।"
        },
        {
          heading: "खेल में वापसी",
          body: "आधुनिक आर्थ्रोस्कोपिक रिकंस्ट्रक्शन और वैज्ञानिक पुनर्वास के साथ क़रीब ३ महीने में जॉगिंग, ६ महीने में खेल-विशेष अभ्यास और ताक़त-स्थिरता परीक्षण पास करने पर ८–१२ महीनों में पूर्ण प्रतिस्पर्धी वापसी।"
        }
      ],
      faqs: [
        { q: "क्या ACL अपने आप जुड़ सकता है?", a: "पूरी तरह फटा ACL कम रक्त आपूर्ति के कारण खुद नहीं जुड़ता। आंशिक टियर और कम सक्रिय घुटनों में फिजियोथेरेपी से काम चल सकता है।" },
        { q: "क्या ACL ऑपरेशन बड़ा होता है?", a: "नहीं। यह दूरबीन से छोटे चीरों द्वारा होता है; आमतौर पर छोटा अस्पताल-प्रवास और उसी या अगले दिन चलने की अनुमति मिलती है।" },
        { q: "इलाज टालने से क्या होता है?", a: "बार-बार घुटना निकलने से मेनिस्कस और कार्टिलेज को नुक़सान होकर गठिया जल्दी आ सकता है। जल्दी जाँच बाक़ी घुटने की रक्षा करती है।" }
      ]
    },
    "heel-pain-plantar-fasciitis": {
      title: "एड़ी का दर्द और प्लांटर फ़ेशियाइटिस: कारण, राहत और विशेषज्ञ से कब मिलें",
      intro: "सुबह पहला क़दम रखते ही एड़ी में तेज़, चुभने जैसा दर्द — यह प्लांटर फ़ेशियाइटिस (तलवे की पट्टी की सूजन) की पहचान है। फुट क्लिनिक आने के सबसे आम कारणों में से एक।",
      sections: [
        {
          heading: "ऐसा क्यों होता है",
          bullets: [
            "सख़्त ज़मीन पर लंबे समय खड़े रहना या चलना",
            "फ्लैट फुट या बहुत ऊँची कमान",
            "पिंडली की कसी मांसपेशियाँ और अचानक बढ़ाई गई गतिविधि",
            "बिना सपोर्ट के जूते-चप्पल और अधिक वज़न"
          ]
        },
        {
          heading: "असल में क्या काम आता है",
          body: "९०% से ज़्यादा मामले बिना सर्जरी ठीक होते हैं — पर हफ़्तों के नियमित इलाज से।",
          bullets: [
            "तलवे और पिंडली की रोज़ाना स्ट्रेचिंग",
            "सिलिकॉन हील कप या आर्च-सपोर्ट इनसोल",
            "गतिविधि में बदलाव और बर्फ़ से मसाज",
            "ज़िद्दी सुबह के दर्द के लिए नाइट स्प्लिंट"
          ]
        },
        {
          heading: "विशेषज्ञ से कब मिलें",
          body: "६–८ हफ़्तों की घरेलू देखभाल के बाद भी दर्द रहे, तो फुट-एंकल विशेषज्ञ निदान पक्का करते हैं, स्ट्रेस फ्रैक्चर या नस दबना ख़ारिज करते हैं, और शॉकवेव थेरेपी या इंजेक्शन जैसे विकल्प देते हैं। सर्जरी बहुत कम मामलों में लगती है।"
        }
      ],
      faqs: [
        { q: "क्या हील स्पर (हड्डी बढ़ना) दर्द की वजह है?", a: "अक्सर नहीं। बिना दर्द वाले कई लोगों के एक्स-रे में भी स्पर दिखता है। दर्द सूजे प्लांटर फ़ेशिया से होता है, इसलिए इलाज उसी पर केंद्रित होता है।" },
        { q: "कितने समय में ठीक होता है?", a: "नियमित स्ट्रेचिंग और सही फुटवियर से अधिकांश मरीज़ों को ६–१२ हफ़्तों में काफ़ी आराम मिलता है; पूरी तरह ठीक होने में कुछ महीने लग सकते हैं।" },
        { q: "क्या MRI ज़रूरी है?", a: "बहुत कम। अधिकांश मामलों में क्लिनिकल जाँच से ही निदान हो जाता है। लक्षण असामान्य हों या इलाज से सुधार न हो तभी इमेजिंग की जाती है।" }
      ]
    },
    "ankle-sprain-vs-fracture": {
      title: "टखना मुड़ा या हड्डी टूटी? फ़र्क़ कैसे पहचानें",
      intro: "मुड़े हुए अधिकांश टखने साधारण देखभाल से ठीक होने वाले लिगामेंट स्प्रेन होते हैं। पर कुछ फ्रैक्चर या गंभीर लिगामेंट टियर होते हैं — इन्हें मामूली मोच समझने से लंबा दर्द और अस्थिरता होती है।",
      sections: [
        {
          heading: "फ्रैक्चर के संकेत",
          bullets: [
            "चोट के तुरंत बाद चार क़दम भी न चल पाना",
            "टखने की हड्डियों पर दबाने से तेज़ दर्द",
            "तेज़ी से बढ़ती सूजन या दिखता टेढ़ापन",
            "पैर में सुन्नपन या रंग बदलना"
          ]
        },
        {
          heading: "सही प्राथमिक उपचार",
          body: "RICE अपनाएँ — आराम, १५–२० मिनट बर्फ़, क्रेप बैंडेज और पैर दिल की ऊँचाई से ऊपर। पहले ४८ घंटों में मालिश, सिकाई और तेज़ दर्द सहकर चलना टालें।"
        },
        {
          heading: "सही जाँच क्यों ज़रूरी",
          body: "बार-बार की 'मामूली' मोच अक्सर बिना इलाज की लिगामेंट चोट होती है। जल्दी फिजियोथेरेपी, ब्रेस और ज़रूरत पर दूरबीन से लिगामेंट मरम्मत स्थायी अस्थिरता रोकती है। वज़न डालकर लिया एक्स-रे मिनटों में फ़ैसला कर देता है।"
        }
      ],
      faqs: [
        { q: "क्या टूटे टखने पर चला जा सकता है?", a: "कभी-कभी हाँ — इसीलिए 'चल पा रहा हूँ तो टूटा नहीं' भरोसेमंद नहीं। बिना खिसके फ्रैक्चर में दर्द के साथ चलना संभव है, पर सही जुड़ाव के लिए सुरक्षा ज़रूरी है।" },
        { q: "मोच कितने दिनों में ठीक होती है?", a: "हल्की मोच १–३ हफ़्ते; मध्यम ४–६ हफ़्ते। ६ हफ़्तों बाद भी दर्द रहे तो विशेषज्ञ जाँच कराएँ।" },
        { q: "क्या हर टखने के फ्रैक्चर में सर्जरी लगती है?", a: "नहीं। स्थिर, सही जुड़े फ्रैक्चर प्लास्टर या बूट में ठीक होते हैं। जोड़ की सतह खिसकी हो या टखना अस्थिर हो तभी सर्जरी ज़रूरी होती है।" }
      ]
    },
    "hip-replacement-signs": {
      title: "हिप रिप्लेसमेंट: ये ५ संकेत ज़रूरत बता सकते हैं",
      intro: "कूल्हे का गठिया अक्सर जाँघ के खिंचाव, जाँघ-दर्द या घुटने के दर्द जैसा लगता है। निदान साफ़ होने तक कई मरीज़ पसंदीदा गतिविधियाँ छोड़ चुके होते हैं। आधुनिक टोटल हिप रिप्लेसमेंट चिकित्सा की सबसे सफल सर्जरियों में से एक है।",
      sections: [
        {
          heading: "कूल्हा ही कारण होने के ५ संकेत",
          bullets: [
            "चलने पर कमर/जाँघ के आगे के हिस्से में दर्द, कभी-कभी घुटने तक",
            "जकड़न — मोज़े पहनना, नाख़ून काटना, पालथी मारना मुश्किल",
            "चलने की दूरी महीने-दर-महीने घटना",
            "रात में नींद तोड़ने वाला दर्द",
            "ऐसी लंगड़ाहट जो परिवार आपसे पहले नोटिस करे"
          ]
        },
        {
          heading: "सर्जरी से क्या मिलता है",
          body: "घिसा बॉल-सॉकेट जोड़ चिकने, टिकाऊ इम्प्लांट से बदला जाता है। मरीज़ आमतौर पर उसी या अगले दिन चलते हैं, हफ़्ते भर में सीढ़ियाँ चढ़ते हैं — भरोसेमंद दर्द-मुक्ति और लौटी आत्मनिर्भरता।"
        },
        {
          heading: "समय मायने रखता है",
          body: "ज़्यादा देर करने से मांसपेशियाँ कमज़ोर और हड्डी की गुणवत्ता कम होती है, जिससे सर्जरी और पुनर्वास कठिन हो जाते हैं। दवा-फिजियोथेरेपी के बावजूद दर्द ज़िंदगी सीमित करे, तो खड़े होकर लिए एक्स-रे के साथ जाँच कराएँ।"
        }
      ],
      faqs: [
        { q: "हिप इम्प्लांट कितना चलता है?", a: "आधुनिक बेयरिंग २०–२५ साल या अधिक चलने की उम्मीद है — इसलिए ज़रूरत होने पर युवा, सक्रिय मरीज़ों के लिए भी उपयुक्त।" },
        { q: "क्या बाद में पालथी मारकर बैठ सकते हैं?", a: "आधुनिक इम्प्लांट और तकनीकों से कई मरीज़ों के लिए संभव है; इम्प्लांट के प्रकार और हड्डी की स्थिति के अनुसार व्यक्तिगत सलाह दी जाती है।" },
        { q: "क्या यह सर्जरी बहुत दर्दनाक है?", a: "मल्टीमोडल दर्द-प्रबंधन और छोटे चीरे की तकनीकों से अधिकांश मरीज़ २४ घंटों में आराम से चलने लगते हैं।" }
      ]
    },
    "fracture-healing-surgery": {
      title: "कुछ फ्रैक्चर में सर्जरी क्यों ज़रूरी होती है? हड्डी जुड़ने की प्रक्रिया",
      intro: "हड्डी शरीर के उन गिने-चुने ऊतकों में है जो खुद को दोबारा बनाकर जुड़ते हैं — पर तभी, जब टूटे सिरे सही जुड़े और स्थिर रहें। यही सिद्धांत तय करता है कि प्लास्टर काफ़ी है या ऑपरेशन ज़रूरी।",
      sections: [
        {
          heading: "प्लास्टर कब काफ़ी है",
          body: "बिना खिसके या मामूली खिसके, सही संरेखित फ्रैक्चर प्लास्टर या ब्रेस में भरोसेमंद ढंग से जुड़ते हैं। बच्चों की हड्डियाँ बढ़त के साथ खुद आकार सुधारती हैं, इसलिए विशेष रूप से अच्छी जुड़ती हैं।"
        },
        {
          heading: "सर्जरी कब ज़रूरी",
          bullets: [
            "प्लास्टर में स्थिर न रहने वाले खिसके फ्रैक्चर",
            "जोड़ की सतह के फ्रैक्चर — २ मिमी की सीढ़ी भी गठिया तेज़ करती है",
            "जाँघ और पैर की कुछ हड्डियों के फ्रैक्चर, जहाँ प्लास्टर का मतलब महीनों बिस्तर पर रहना",
            "खुले (कंपाउंड) फ्रैक्चर और नस/रक्तवाहिनी की चोट वाले फ्रैक्चर"
          ]
        },
        {
          heading: "मैल्युनियन और नॉनयुनियन",
          body: "टेढ़ा जुड़ा (मैल्युनियन) या न जुड़ा (नॉनयुनियन) फ्रैक्चर लगातार दर्द और विकृति देता है। ये सुधारे जा सकते हैं — री-अलाइनमेंट, मज़बूत फिक्सेशन और ज़रूरत पर बोन ग्राफ्टिंग से। जल्दी विशेषज्ञ इलाज अधिकांश मामलों को रोक देता है।"
        }
      ],
      faqs: [
        { q: "फ्रैक्चर जुड़ने में कितना समय लगता है?", a: "वयस्कों के अधिकांश फ्रैक्चर ६–१२ हफ़्तों में जुड़ते हैं — हड्डी, रक्त आपूर्ति, स्थिरता और धूम्रपान/डायबिटीज़ जैसे कारकों पर निर्भर।" },
        { q: "क्या प्लेट-स्क्रू बाद में निकालने पड़ते हैं?", a: "आमतौर पर नहीं — इम्प्लांट सुरक्षित रूप से अंदर रहने के लिए बने होते हैं। परेशानी होने पर ही हड्डी जुड़ने के बाद निकालने पर विचार होता है।" },
        { q: "क्या पैर में इम्प्लांट के साथ चल सकते हैं?", a: "हाँ। आधुनिक फिक्सेशन जल्दी चलने-फिरने के लिए ही बनाया जाता है; कई मामलों में जल्दी वज़न डालना हड्डी जुड़ने में मदद भी करता है।" }
      ]
    }
  }
};
const LANGS = [
  { code: "en", label: "English" },
  { code: "mr", label: "मराठी" },
  { code: "hi", label: "हिंदी" }
];
function EducationArticle() {
  var _a;
  const { slug: slug2 } = useParams();
  const [lang, setLang] = useState("en");
  const article = ARTICLES.find((a) => a.slug === slug2);
  const content = lang !== "en" && ((_a = TRANSLATIONS[lang]) == null ? void 0 : _a[slug2]) ? TRANSLATIONS[lang][slug2] : article;
  const t = LABELS[lang] || LABELS.en;
  const jsonLd = useMemo(() => {
    if (!article) return null;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          headline: article.title,
          description: article.metaDescription,
          datePublished: article.date,
          inLanguage: ["en", "mr", "hi"],
          author: { "@type": "Physician", name: SITE.name, url: SITE.url },
          url: `${SITE.url}/education/${article.slug}`
        },
        {
          "@type": "FAQPage",
          mainEntity: article.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a }
          }))
        }
      ]
    };
  }, [article]);
  if (!article) return /* @__PURE__ */ jsx(Navigate, { to: "/education", replace: true });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: article.title,
        description: article.metaDescription,
        path: `/education/${article.slug}`,
        jsonLd
      }
    ),
    /* @__PURE__ */ jsxs("article", { className: "mx-auto max-w-3xl px-4 py-16", lang, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsx(Link, { to: "/education", className: "text-sm font-medium text-brand-gold hover:underline", children: "← Patient Education Hub" }),
        /* @__PURE__ */ jsx("div", { className: "glass flex rounded-full p-1", role: "group", "aria-label": "Choose language", children: LANGS.map((l) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setLang(l.code),
            "aria-pressed": lang === l.code,
            className: `rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${lang === l.code ? "bg-gradient-to-r from-brand-brown to-brand-gold text-white shadow-sm" : "text-slate-600 hover:bg-white/60"}`,
            children: l.label
          },
          l.code
        )) })
      ] }),
      /* @__PURE__ */ jsxs("header", { className: "mt-6", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-brown", children: article.category }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl", children: content.title }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm text-slate-400", children: [
          t.by,
          " ",
          SITE.name,
          " · ",
          article.readTime,
          " ",
          t.minRead
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg leading-relaxed text-slate-700", children: content.intro }),
      content.sections.map((s) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("section", { className: "mt-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-slate-900", children: s.heading }),
        s.body && /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed text-slate-700", children: s.body }),
        s.bullets && /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2.5", children: s.bullets.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-slate-700", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold", "aria-hidden": "true" }),
          b
        ] }, b)) })
      ] }) }, s.heading)),
      /* @__PURE__ */ jsxs("section", { className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-slate-900", children: t.faq }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 space-y-3", children: content.faqs.map((f) => /* @__PURE__ */ jsxs(
          "details",
          {
            className: "glass group rounded-2xl p-5 transition-shadow duration-300 open:shadow-glass-lg",
            children: [
              /* @__PURE__ */ jsx("summary", { className: "cursor-pointer list-none font-semibold text-slate-900", children: f.q }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-slate-600", children: f.a })
            ]
          },
          f.q
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark to-slate-900 p-8 text-center shadow-glass-lg", children: [
        /* @__PURE__ */ jsx("div", { className: "blob left-1/3 top-0 h-40 w-40 bg-brand-gold/15", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-xl font-bold text-white", children: t.ctaTitle }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-slate-300", children: t.ctaBody }),
          /* @__PURE__ */ jsx(Link, { to: "/book", className: "btn-gradient mt-5", children: t.ctaBtn })
        ] })
      ] })
    ] })
  ] });
}
const RELATED = {
  "joint-replacement": ["robotic-knee-replacement-recovery", "hip-replacement-signs", "early-signs-knee-arthritis"],
  "foot-ankle": ["heel-pain-plantar-fasciitis", "ankle-sprain-vs-fracture"],
  "sports-arthroscopy": ["acl-tear-symptoms-treatment", "early-signs-knee-arthritis"],
  "trauma-fracture": ["fracture-healing-surgery", "ankle-sprain-vs-fracture"]
};
function Specialty() {
  const { slug: slug2 } = useParams();
  const spec = SPECIALTIES.find((s) => s.slug === slug2);
  if (!spec) return /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true });
  const related = (RELATED[slug2] || []).map((s) => ARTICLES.find((a) => a.slug === s)).filter(Boolean);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: spec.name,
        description: `${spec.short} ${spec.points.join(", ")} — Dr. Niranjan Ghag, Orthopaedic Surgeon, Thane.`,
        path: `/specialties/${slug2}`
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden px-4 py-16", children: [
      /* @__PURE__ */ jsx("div", { className: "blob -right-20 top-0 h-72 w-72 bg-brand-brown/10 animate-float", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsx("nav", { className: "flex flex-wrap gap-2 text-sm", "aria-label": "Specialties", children: SPECIALTIES.map((s) => /* @__PURE__ */ jsx(
          Link,
          {
            to: `/specialties/${s.slug}`,
            className: `rounded-full px-4 py-1.5 font-medium transition-all duration-300 ${s.slug === slug2 ? "bg-gradient-to-r from-brand-brown to-brand-gold text-white shadow-md shadow-brand-brown/20" : "bg-white/60 text-slate-600 backdrop-blur hover:bg-slate-100"}`,
            children: s.name.split(" (")[0]
          },
          s.slug
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 grid items-start gap-10 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "font-serif text-4xl font-bold leading-tight text-slate-900", children: spec.name }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg leading-relaxed text-slate-600", children: spec.short }),
            /* @__PURE__ */ jsx("ul", { className: "mt-8 space-y-3", children: spec.points.map((p, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 60, children: /* @__PURE__ */ jsxs("li", { className: "glass flex items-center gap-3 rounded-2xl px-5 py-3.5 text-slate-800 transition-shadow duration-300 hover:shadow-glass-lg", children: [
              /* @__PURE__ */ jsx("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-gold/30 to-brand-brown/20 text-brand-brown", "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ jsx("path", { d: "M5 13l4 4L19 7" }) }) }),
              p
            ] }) }, p)) }),
            /* @__PURE__ */ jsx(Link, { to: "/book", className: "btn-gradient mt-9", children: "Book a Consultation" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-gold/20 via-transparent to-brand-brown/15 blur-2xl", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx(
              Image,
              {
                src: spec.image,
                webpSrc: spec.image.replace(".jpg", ".webp"),
                alt: spec.name,
                width: 1600,
                height: 1067,
                aspect: "3/2",
                className: "glass relative rounded-3xl p-2",
                imgClassName: "rounded-2xl",
                sizes: "(min-width: 1024px) 560px, 100vw"
              }
            )
          ] })
        ] }),
        related.length > 0 && /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("section", { className: "mt-16", "aria-labelledby": "related-heading", children: [
          /* @__PURE__ */ jsx("h2", { id: "related-heading", className: "font-serif text-2xl font-bold text-slate-900", children: "Related Patient Guides" }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: related.map((a) => /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/education/${a.slug}`,
              className: "glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg",
              children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold leading-snug text-slate-900 group-hover:text-brand-brown", children: a.title }),
                /* @__PURE__ */ jsx("span", { className: "mt-3 inline-block text-xs font-medium text-brand-gold", children: "Read guide →" })
              ]
            },
            a.slug
          )) })
        ] }) })
      ] })
    ] })
  ] });
}
function buildSchema(proc) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `https://drniranjanghag.com/procedures/${proc.slug}#page`,
        url: `https://drniranjanghag.com/procedures/${proc.slug}`,
        name: proc.keywordTitle,
        description: proc.metaDescription,
        inLanguage: "en",
        about: {
          "@type": "MedicalProcedure",
          name: proc.name,
          procedureType: "https://health-lifesci.schema.org/SurgicalProcedure",
          bodyLocation: proc.slug.includes("knee") ? "Knee" : proc.slug.includes("hip") ? "Hip" : "Knee (ACL)",
          followup: "Physiotherapy and structured rehabilitation",
          preparation: "Pre-operative fitness assessment and imaging",
          performer: {
            "@type": "Physician",
            "@id": "https://drniranjanghag.com/#physician",
            name: "Dr. Niranjan Ghag"
          },
          location: {
            "@type": "MedicalClinic",
            "@id": "https://drniranjanghag.com/#joshis-neurotrauma-centre"
          }
        }
      },
      proc.faqs && proc.faqs.length ? {
        "@type": "FAQPage",
        "@id": `https://drniranjanghag.com/procedures/${proc.slug}#faq`,
        mainEntity: proc.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
      } : null
    ].filter(Boolean)
  };
}
function applyHead(proc, schema) {
  document.title = `${proc.keywordTitle} | ${SITE.name}`;
  const el = document.querySelector('meta[name="description"]');
  if (el) el.setAttribute("content", proc.metaDescription);
  const id = "procedure-jsonld";
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  const s = document.createElement("script");
  s.id = id;
  s.type = "application/ld+json";
  s.textContent = JSON.stringify(schema);
  document.head.appendChild(s);
}
function Accordion({ faqs: faqs2 }) {
  const [open, setOpen] = useState(null);
  return /* @__PURE__ */ jsx("div", { className: "divide-y divide-slate-200", children: faqs2.map((faq, i) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen(open === i ? null : i),
        className: "flex w-full items-center justify-between gap-4 py-4 text-left",
        "aria-expanded": open === i,
        children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium text-slate-800", children: faq.q }),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: `h-5 w-5 flex-shrink-0 text-brand-gold transition-transform ${open === i ? "rotate-45" : ""}`,
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx("path", { d: "M12 5v14M5 12h14" })
            }
          )
        ]
      }
    ),
    open === i && /* @__PURE__ */ jsx("p", { className: "pb-4 text-sm leading-relaxed text-slate-600", children: faq.a })
  ] }, i)) });
}
function Procedure() {
  const { slug: slug2 } = useParams();
  const proc = PROCEDURES.find((p) => p.slug === slug2);
  if (proc) {
    headState.title = `${proc.keywordTitle} | ${SITE.name}`;
    headState.description = proc.metaDescription;
    headState.path = `/procedures/${proc.slug}`;
    headState.jsonLd = buildSchema(proc);
  }
  useEffect(() => {
    if (!proc) return;
    applyHead(proc, buildSchema(proc));
    return () => {
      const s = document.getElementById("procedure-jsonld");
      if (s) s.remove();
    };
  }, [proc]);
  if (!proc) return /* @__PURE__ */ jsx(Navigate, { to: "/404", replace: true });
  const waMsg = encodeURIComponent(
    `Hello Dr. Ghag, I would like to enquire about ${proc.name}. Please advise.`
  );
  const waUrl = `https://wa.me/${SITE.phoneRaw}?text=${waMsg}`;
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-dark to-brand-brown text-white", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center opacity-20",
          style: { backgroundImage: `url(${proc.image})` },
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "blob -left-16 top-0 h-72 w-72 bg-brand-gold/15 animate-float-slow", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-20 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold", children: "Procedure" }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-4xl font-bold leading-tight md:text-5xl", children: proc.name }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300", children: proc.hero }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center", children: [
          /* @__PURE__ */ jsx("a", { href: waUrl, target: "_blank", rel: "noopener noreferrer", className: "btn-gradient", children: "WhatsApp Us" }),
          /* @__PURE__ */ jsxs("a", { href: `tel:+${SITE.phoneRaw}`, className: "btn-outline-dark", children: [
            "Call ",
            SITE.phoneDisplay
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("article", { className: "mx-auto max-w-3xl px-4 py-14", children: proc.sections.map((sec, i) => /* @__PURE__ */ jsx(Reveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-brand-brown mb-3", children: sec.heading }),
      sec.body && /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed mb-3", children: sec.body }),
      sec.bullets && /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-slate-600", children: sec.bullets.map((b, j) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx("path", { d: "M5 13l4 4L19 7" })
          }
        ),
        /* @__PURE__ */ jsx("span", { children: b })
      ] }, j)) })
    ] }) }, i)) }),
    proc.faqs && proc.faqs.length > 0 && /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-b from-slate-50 to-white py-14", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-brand-brown mb-6", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("div", { className: "glass rounded-3xl px-2", children: /* @__PURE__ */ jsx(Accordion, { faqs: proc.faqs }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-14", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-dark to-slate-900 p-8 text-white shadow-glass-lg md:flex md:items-center md:justify-between md:gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "blob -right-10 -top-10 h-44 w-44 bg-brand-gold/15", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("p", { className: "font-serif text-xl font-bold mb-1", children: "Book a Consultation" }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-300 text-sm leading-relaxed", children: [
            CLINIC.name,
            " · ",
            CLINIC.address.split(",").slice(0, 3).join(", ")
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-xs mt-1", children: "Mon–Sat 12 am–8 am & 3 pm–11:30 pm · Sun open 24 hours" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative mt-6 flex flex-col gap-3 sm:flex-row md:mt-0 md:flex-col lg:flex-row", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: waUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "rounded-full bg-gradient-to-r from-brand-brown to-brand-gold px-6 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-brand-brown/20 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap",
              children: "WhatsApp Us"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: CLINIC.mapUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "rounded-full border border-white/30 bg-white/5 px-6 py-2.5 text-center text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 whitespace-nowrap",
              children: "Get Directions"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 border-t border-slate-200 pt-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4", children: "Related reading" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
          proc.relatedArticles && proc.relatedArticles.map((a) => /* @__PURE__ */ jsx(
            Link,
            {
              to: `/education/${a.slug}`,
              className: "rounded-full border border-slate-200 px-4 py-1.5 text-sm text-slate-700 transition-colors hover:border-brand-gold hover:text-brand-gold",
              children: a.title
            },
            a.slug
          )),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: `/specialties/${proc.specialty}`,
              className: "rounded-full border border-slate-200 px-4 py-1.5 text-sm text-slate-700 transition-colors hover:border-brand-gold hover:text-brand-gold",
              children: "View specialty page →"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
function NotFound() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Seo, { title: "Page Not Found", description: "The page you're looking for doesn't exist.", path: "/404" }),
    /* @__PURE__ */ jsxs("section", { className: "relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-4 py-16 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "blob left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 bg-brand-gold/15 animate-float-slow", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsx("p", { className: "bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text font-serif text-6xl font-bold text-transparent", children: "404" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 font-serif text-2xl font-bold text-slate-900", children: "Page not found" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-600", children: "The page you're looking for may have moved." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-7 flex justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "btn-gradient", children: "Go Home" }),
          /* @__PURE__ */ jsx(Link, { to: "/sitemap", className: "btn-outline", children: "View Sitemap" })
        ] })
      ] })
    ] })
  ] });
}
function ServerApp() {
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(About, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/book", element: /* @__PURE__ */ jsx(Book, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/sitemap", element: /* @__PURE__ */ jsx(Sitemap, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/education", element: /* @__PURE__ */ jsx(Education, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/education/:slug", element: /* @__PURE__ */ jsx(EducationArticle, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/specialties/:slug", element: /* @__PURE__ */ jsx(Specialty, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/procedures/:slug", element: /* @__PURE__ */ jsx(Procedure, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
  ] }) });
}
function render(url) {
  headState.title = "";
  headState.description = "";
  headState.path = url;
  headState.jsonLd = null;
  const html = renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(ServerApp, {}) })
  );
  return { html, head: { ...headState } };
}
export {
  render
};
