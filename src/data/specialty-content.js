// Long-form content for the four specialty pages, keyed by slug.
//
// Kept out of site.js deliberately: site.js is imported by Navbar, Footer and
// Home, so anything added there ships on every route. Only Specialty.jsx
// imports this file.
//
// Each entry supplies:
//   metaDescription — hand-written, kept under ~155 chars
//   intro           — lead paragraph under the H1
//   sections        — question-style H2s (body and/or bullets)
//   faqs            — feeds both the visible accordion and FAQPage schema
//   footerNote      — internal links, rendered as HTML

export const SPECIALTY_CONTENT = {
  'joint-replacement': {
    metaDescription:
      'Robotic hip & knee replacement in Thane West by Dr. Niranjan Ghag — when surgery is needed, what robotics change, recovery and implant lifespan.',
    intro:
      'A hip or knee is replaced when the cartilage lining the joint has worn away and the pain has stopped responding to everything simpler. It is one of the most reliably successful operations in medicine — but the decision of when to do it, which implant to use, and how precisely it is positioned matters more than most patients are told.',
    sections: [
      {
        heading: 'When does a worn joint actually need replacing?',
        body: 'Replacement is the last step, not the first. Weight reduction, physiotherapy to strengthen the muscles around the joint, activity modification, walking aids and simple pain relief all come first, and many patients do well on these for years. Surgery enters the conversation when pain limits your daily life despite those measures — when walking distance keeps shrinking, when pain wakes you at night, when stairs and getting out of a chair have become the problem. The decision rests on how much the joint is costing you day to day, not on the X-ray alone. Two people with identical X-rays can need very different things.',
      },
      {
        heading: 'What does robotic assistance actually change?',
        body: 'A 3D plan of your specific joint is built before surgery. During the operation, the robotic arm holds every bone cut to that plan, with alignment accurate to fractions of a millimetre, and stops the instrument outside the planned boundary — which is what protects the surrounding ligaments and healthy bone. Published results show more accurate implant positioning and less soft-tissue trauma, which tends to translate into lower early pain scores and quicker rehabilitation. It is worth being clear about what robotics is not: it is not an autonomous robot, and it does not replace surgical judgement. The surgeon plans and performs the operation; the system enforces the precision of it. Surgeon experience remains the single biggest factor in the result either way.',
      },
      {
        heading: 'Total or partial knee replacement — which is right?',
        body: 'The knee has three compartments, and arthritis does not always affect all of them. When wear is confined to one compartment — most often the inner side — a partial (unicondylar) replacement resurfaces only that part and leaves the rest of your knee, including both cruciate ligaments, untouched. Recovery is typically faster and the knee often feels more natural. It only suits a minority of patients: the other compartments must be healthy, the ligaments intact, and the deformity correctable. When wear is more widespread, a total knee replacement gives the more durable answer. This is assessed on examination and standing X-rays.',
      },
      {
        heading: 'What is revision joint replacement?',
        body: 'A revision replaces an implant that has failed — through loosening, wear, infection, instability or fracture around the implant. It is a longer, more demanding operation than a first-time replacement, because bone stock has to be assessed and rebuilt, and specialised implants are often needed. Warning signs worth acting on are new pain in a joint that had settled, a change in the way the joint feels or sounds, swelling, or a sudden loss of function. Any of these deserve prompt review rather than watchful waiting.',
      },
      {
        heading: 'How long do modern joint replacements last?',
        body: 'National joint registry data show that more than 90% of hip and knee replacements are still functioning well at 15 years, and a substantial proportion reach 25 years and beyond. Implant material choice is tailored to the patient — for younger, more active patients, bearing surfaces such as ceramic or highly cross-linked polyethylene are selected specifically to extend lifespan. Your weight, activity level and general health all influence the number, which is part of why the timing conversation matters.',
      },
      {
        heading: 'What does recovery look like?',
        bullets: [
          'Same day: standing and taking first steps with a walker, usually within hours of surgery',
          'Day 2–3: staircase training, and discharge home in most cases',
          'Week 2–3: walking indoors without support; sutures reviewed',
          'Week 4–6: desk work, driving, most routine daily activities',
          'Month 3 onward: full routine including travel and longer walking',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I know if I need a knee or hip replacement?',
        a: 'The usual signals are pain that limits your walking distance or stairs, pain at night that disturbs sleep, stiffness that interferes with daily tasks like putting on socks, and a deformity that is progressing — all despite medication, physiotherapy and injections. An examination and a standing X-ray usually give a clear answer. The decision is based on how much the joint limits your life, not on the X-ray alone.',
      },
      {
        q: 'Is robotic joint replacement better than conventional surgery?',
        a: 'Robotic assistance improves the accuracy of implant positioning and reduces soft-tissue trauma, which is associated with less early pain and faster rehabilitation. It is one factor among several, and surgeon experience matters most either way. It suits some patients more than others, and that is worth discussing honestly at consultation rather than assuming newer automatically means better for you.',
      },
      {
        q: 'How long does a hip or knee replacement last?',
        a: 'More than 90% of modern hip and knee replacements are still working well at 15 years, and many last 25 years or more. Implant choice is tailored to your age and activity level — younger, more active patients are generally given bearing surfaces selected to maximise lifespan.',
      },
      {
        q: 'Can both knees be replaced at the same time?',
        a: 'Yes. For patients who are medically fit, both knees can be replaced under one anaesthetic, which means one hospital stay and one recovery period rather than two. Cardiac and general fitness are assessed carefully first, because it is a bigger physiological demand than a single-side operation.',
      },
      {
        q: 'Is joint replacement covered by insurance in India?',
        a: 'Most health insurance and Mediclaim policies cover hip and knee replacement, including cashless treatment at network hospitals, subject to your policy terms and any waiting period that applies to joint conditions. Bring your policy documents to the consultation for an answer specific to your plan.',
      },
    ],
    footerNote:
      'Read more on <a href="/education/early-signs-knee-arthritis">early signs of knee arthritis</a>, <a href="/education/robotic-knee-replacement-cost-thane">robotic knee replacement cost in Thane</a>, or the honest <a href="/procedures/robotic-vs-traditional-knee-replacement">robotic vs. traditional comparison</a>. You can also <a href="/book">book a consultation</a> in Thane West.',
  },

  'foot-ankle': {
    metaDescription:
      'Foot & ankle surgeon in Thane West — bunions, flat foot, heel pain, Achilles problems, ankle instability and diabetic foot care by Dr. Niranjan Ghag.',
    intro:
      'The foot and ankle carry your entire body weight over roughly ten thousand steps a day, across twenty-six bones and more than thirty joints. Problems here are frequently dismissed as ordinary aches, treated with rest and painkillers for months, and only assessed properly once walking has become genuinely difficult. Most foot and ankle conditions respond well to non-surgical treatment — provided the diagnosis is right.',
    sections: [
      {
        heading: 'Why foot and ankle problems are so often mistreated',
        body: 'Pain in the foot is a poor guide to its own cause. Heel pain can come from the plantar fascia, the Achilles tendon, a nerve, or a stress fracture — and each needs a different treatment. Pain on the outer ankle after a twist may be a ligament sprain or a fracture that does not show clearly on an initial X-ray. Because the structures sit so close together, a careful examination usually tells more than a scan does, and it is what determines whether you need a simple insole or an operation.',
      },
      {
        heading: 'Bunions and flat foot: when is surgery justified?',
        body: 'A bunion is a deformity of the joint at the base of the big toe, and it is progressive — it does not correct itself, and no splint or exercise reverses an established one. That said, a bunion only needs surgery when it hurts, when footwear has become a genuine problem, or when the deformity is beginning to affect the neighbouring toes. A painless bunion, however prominent, is not by itself a reason to operate. Adult flat foot is treated similarly: supportive footwear, orthotics and strengthening of the supporting tendons come first, and surgery is reserved for feet that stay painful or where the deformity is progressing and the tendon on the inner side is failing.',
      },
      {
        heading: 'What causes persistent heel pain?',
        body: 'The commonest cause is plantar fasciitis — inflammation where the thick band of tissue under the foot attaches to the heel bone. The signature is pain in the first few steps out of bed in the morning, easing as you move and returning after periods of sitting. It responds to stretching of the calf and plantar fascia, appropriate footwear, heel cushioning and activity modification in the large majority of cases, though it can take months rather than weeks. Heel spurs seen on X-ray are usually a consequence rather than the cause, and removing them is rarely the answer. Pain at the back of the heel is a different problem, involving the Achilles insertion, and needs a different approach.',
      },
      {
        heading: 'Achilles tendon problems',
        body: 'The Achilles is the strongest tendon in the body and it fails in two quite different ways. Gradual-onset pain and thickening (tendinopathy) is an overuse problem, treated with a structured loading programme — eccentric strengthening in particular — alongside footwear changes and activity modification. A sudden rupture is different: patients typically describe a sensation like being kicked or struck in the back of the ankle, sometimes with an audible snap, followed by difficulty pushing off. A rupture needs prompt assessment, because the choice between surgical repair and functional bracing depends partly on how early it is seen.',
      },
      {
        heading: 'Ankle sprains that never settle',
        body: 'Most ankle sprains recover with rest, ice, compression and a progressive rehabilitation programme. A meaningful minority do not, and those are worth investigating rather than enduring. Persistent pain or a feeling of giving way months after a sprain may indicate chronic ligament instability, a missed fracture, damage to the cartilage surface of the talus, or a tendon injury on the outer side of the ankle. Repeated giving-way episodes progressively damage the joint surface, which is the reason not to simply live with it.',
      },
      {
        heading: 'Diabetic foot: why early review matters',
        body: 'Diabetes affects the foot in two compounding ways — reduced sensation, so injuries go unnoticed, and reduced blood supply, so they heal poorly. A minor blister or a small ulcer can progress silently and quickly. Anyone with diabetes should have their feet examined regularly, check them daily for breaks in the skin, and treat any new ulcer, colour change, swelling or unexplained warmth as needing prompt review rather than a wait-and-see approach. Early intervention here prevents the outcomes that matter most.',
      },
    ],
    faqs: [
      {
        q: 'Do bunions always need surgery?',
        a: 'No. Surgery is considered when the bunion is painful, when it makes normal footwear difficult, or when the deformity is starting to affect the neighbouring toes. A prominent but painless bunion does not need an operation. Wider footwear, padding and orthotics help symptoms, though they do not reverse the deformity itself.',
      },
      {
        q: 'Why does my heel hurt most on the first steps in the morning?',
        a: 'That pattern is characteristic of plantar fasciitis. The plantar fascia tightens overnight, and the first steps stretch it abruptly. Pain typically eases as you walk and returns after sitting. Most cases settle with calf and fascia stretching, supportive footwear and activity modification, though recovery is measured in months rather than weeks.',
      },
      {
        q: 'How do I know if my ankle sprain is actually a fracture?',
        a: 'Features that point towards a fracture include inability to bear weight for four steps immediately after the injury and afterwards, and tenderness directly over the bone at the back edge or tip of either ankle bone. These signs warrant an X-ray. Swelling and bruising alone do not distinguish the two, since severe sprains swell dramatically.',
      },
      {
        q: 'Can flat feet be corrected in adults?',
        a: 'Flexible flat feet that cause no pain need no treatment. When they are painful, supportive footwear, orthotics and strengthening of the tibialis posterior tendon are the first steps. Surgery is reserved for feet that remain painful despite this, or where the deformity is progressing and the supporting tendon is failing.',
      },
      {
        q: 'Why do people with diabetes need special foot care?',
        a: 'Diabetes can reduce both sensation and blood supply in the feet, so injuries are felt less and heal more slowly. A small blister or ulcer can worsen without being noticed. Daily self-checks, regular professional examination and prompt review of any new ulcer, swelling or colour change substantially reduce the risk of serious complications.',
      },
    ],
    footerNote:
      'Read more on <a href="/education/heel-pain-plantar-fasciitis">heel pain and plantar fasciitis</a> or <a href="/education/ankle-sprain-vs-fracture">telling an ankle sprain from a fracture</a>. See <a href="/procedures/foot-ankle-surgery">foot &amp; ankle surgery</a> with Dr. Ghag, or <a href="/book">book a consultation</a>.',
  },

  'sports-arthroscopy': {
    metaDescription:
      'Sports injury & arthroscopy in Thane West — ACL reconstruction, meniscus repair and shoulder keyhole surgery with structured return-to-sport care.',
    intro:
      'Arthroscopy lets a joint be diagnosed and treated through incisions the width of a pencil, using a camera and fine instruments rather than opening the joint. For sports injuries this matters enormously: less disruption to healthy tissue means less pain, a shorter stay, and a faster, more predictable return to activity. The operation is only half the result, though — what happens in the months of rehabilitation afterwards determines the other half.',
    sections: [
      {
        heading: 'What is arthroscopy (keyhole surgery)?',
        body: 'A small camera is introduced into the joint through one incision, and instruments through one or two others. The surgeon works from a magnified view on screen, which shows the joint surfaces, ligaments and cartilage in more detail than an open approach would. Because the surrounding tissue is left largely undisturbed, most arthroscopic procedures are done as day-care or single-night stays. It is used most often in the knee and shoulder, and also in the ankle, hip and wrist.',
      },
      {
        heading: 'ACL injuries: who actually needs reconstruction?',
        body: 'Not every ACL tear needs an operation, and the honest answer depends on your knee and your demands rather than on the scan alone. Physiotherapy can work well for lower-demand patients who do not play pivoting sports, whose knee is stable and who have no significant associated injuries. Reconstruction is generally recommended for athletes at any level, for people whose work is physically demanding, for anyone whose knee keeps giving way, and when a repairable meniscus tear accompanies the ACL. The reason not to simply wait and see is that every giving-way episode risks tearing a meniscus or damaging cartilage, and repeated instability is a well-established route to early arthritis.',
      },
      {
        heading: 'Meniscus tears: repair or trim?',
        body: 'The menisci are the knee\'s shock absorbers, and preserving them protects the joint surface for decades. Wherever a tear is repairable, repair is preferred over removal — but repairability depends on the tear pattern, its location and its blood supply. The outer third of the meniscus has a blood supply and heals; the inner portion largely does not. Repair requires a longer, more protected rehabilitation than trimming does, which is a trade-off worth understanding before surgery rather than after. Removing meniscal tissue gives quicker early relief but increases long-term load on the cartilage.',
      },
      {
        heading: 'Shoulder problems in sport',
        body: 'Two patterns dominate. Rotator cuff injuries produce pain on overhead activity, night pain when lying on the affected side, and weakness on lifting or rotating the arm — common in throwing and racquet sports, and increasingly with age. Shoulder instability follows a dislocation and shows up as recurrent slipping or apprehension in certain positions, particularly overhead and behind the body; younger patients who dislocate have a notably high rate of recurrence. Both are assessed clinically and with MRI, and both can often be addressed arthroscopically.',
      },
      {
        heading: 'Why rehabilitation decides the result',
        body: 'A technically perfect reconstruction fails if the rehabilitation does not follow. After ACL reconstruction in particular, the graft is at its biologically weakest around months two to four — precisely when the knee starts to feel good. Returning to sport in that window is the commonest cause of re-tear. This is why return to pivoting sport should be a test-based decision, confirmed by strength and hop testing, rather than a date on a calendar. Rehabilitation is supervised in conjunction with your physiotherapist and progressed on evidence of readiness.',
      },
      {
        heading: 'Returning to sport safely',
        bullets: [
          'Week 0–2: protect the joint, restore full extension, reactivate the quadriceps',
          'Week 2–6: off crutches, stationary cycling, regain full range of movement',
          'Month 2–3: progressive strengthening; desk work comfortable',
          'Month 4–6: straight-line running and sport-specific drills',
          'Month 8–12: return to pivoting sport once strength and hop tests confirm readiness',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is keyhole (arthroscopic) surgery?',
        a: 'Arthroscopy uses a small camera and fine instruments inserted through incisions a few millimetres wide, so the joint is treated without being opened. The surgeon works from a magnified view on screen. Because healthy tissue is largely undisturbed, most arthroscopic procedures are day-care or one-night stays with faster recovery than open surgery.',
      },
      {
        q: 'Does every ACL tear need surgery?',
        a: 'No. Lower-demand patients with a stable knee and no significant associated injuries often do well with structured physiotherapy. Reconstruction is usually recommended for athletes, physically demanding jobs, anyone whose knee gives way repeatedly, or when a repairable meniscus tear accompanies the ACL. Repeated giving-way is what damages the joint over time.',
      },
      {
        q: 'Is a meniscus tear repaired or removed?',
        a: 'Repair is preferred wherever the tear allows it, because preserving meniscal tissue protects the joint surface long term. Repairability depends on the tear pattern and location — the outer third has a blood supply and can heal, the inner portion largely cannot. Repair requires longer protected rehabilitation than trimming.',
      },
      {
        q: 'How soon can I return to sport after knee arthroscopy?',
        a: 'It depends entirely on what was done. A simple meniscal trim may allow return to sport within weeks, whereas ACL reconstruction takes 8–12 months before pivoting sport, and meniscal repair requires a longer protected phase. Return to sport should be confirmed by strength and hop testing rather than decided by elapsed time.',
      },
      {
        q: 'What happens if a sports injury is left untreated?',
        a: 'It depends on the injury, but instability is the pattern that causes lasting damage. A knee that repeatedly gives way progressively injures the menisci and cartilage, and recurrent shoulder dislocations progressively damage the socket rim and its labrum. Both make later surgery more complex and less predictable, which is why recurrent instability warrants assessment.',
      },
    ],
    footerNote:
      'Read more on <a href="/education/acl-tear-symptoms-treatment">ACL tear symptoms and treatment</a> or the <a href="/education/acl-surgery-recovery-timeline">ACL surgery recovery timeline</a>. See <a href="/procedures/acl-reconstruction">ACL reconstruction</a> and <a href="/procedures/keyhole-surgery">keyhole surgery</a>, or <a href="/book">book an assessment</a>.',
  },

  'trauma-fracture': {
    metaDescription:
      'Complex fracture & trauma surgery in Thane West — intra-articular fractures, pelvic trauma, nonunion correction and polytrauma care by Dr. Niranjan Ghag.',
    intro:
      'Most fractures heal well with the right treatment, and a good number need no operation at all. The fractures that cause lasting trouble are the ones where alignment was accepted as close enough, where a joint surface was left uneven, or where healing quietly failed and was not picked up. Getting the first decision right is what prevents the difficult second operation.',
    sections: [
      {
        heading: 'What makes a fracture "complex"?',
        body: 'Several features move a fracture out of the routine category: the break extends into a joint surface, the bone is broken into multiple fragments, the fracture is open (the skin is breached, which introduces infection risk), the fracture is accompanied by injury to nerves or blood vessels, or the bone is weakened by osteoporosis or previous disease. Complex fractures need planning — often CT imaging to understand the fragment pattern before deciding on the approach and the implant.',
      },
      {
        heading: 'When does a fracture need surgery?',
        body: 'A fracture is treated without surgery when the fragments are in acceptable position and can be held there reliably in a cast or brace while healing proceeds. Surgery is indicated when the fragments are displaced and will not stay reduced, when the fracture involves a joint surface, when the fracture is unstable, when it is open, or when early movement is essential to a good outcome — as it often is around the elbow and shoulder. Fixation is not about the bone alone; it is about restoring the function that depends on that bone.',
      },
      {
        heading: 'Intra-articular fractures: why alignment matters',
        body: 'When a fracture runs into a joint, the cartilage surface is broken as well as the bone. Cartilage does not regenerate, and a step or gap left in that surface concentrates load in a way the joint was never designed to tolerate. Over years this reliably produces post-traumatic arthritis. This is why intra-articular fractures — around the ankle, knee, elbow, wrist and shoulder — are reconstructed with far tighter tolerances than shaft fractures, often with CT planning and anatomical fixation.',
      },
      {
        heading: 'Pelvic and acetabular trauma',
        body: 'Pelvic fractures usually follow high-energy injury and can be life-threatening in the early hours because of the bleeding associated with them, which is why initial management is a resuscitation priority. Acetabular fractures involve the socket of the hip joint and are among the most technically demanding fractures to reconstruct, requiring detailed CT assessment and careful surgical planning. Restoring the socket accurately is what preserves the hip, and it also makes any later hip replacement considerably more straightforward.',
      },
      {
        heading: 'When a fracture fails to heal',
        body: 'A malunion is a fracture that healed in a poor position; a nonunion is one that has not healed at all. Both are treatable, and both are worth acting on rather than accepting. Signs of a nonunion include continuing pain at the fracture site months after injury, persistent tenderness, movement at the site, or an X-ray that shows no progression of healing. Contributing factors include smoking, poor blood supply at the fracture, infection, inadequate stability, diabetes and poor nutrition — several of which can be corrected as part of treatment. Correction generally involves re-establishing stability and, where needed, bone grafting to restart the biological healing process.',
      },
      {
        heading: 'Polytrauma: priorities in the first hours',
        body: 'When someone has multiple injuries, orthopaedic fixation takes its place within a wider sequence. Life-threatening problems are addressed first, major fractures are stabilised early to reduce bleeding and pain and to allow the patient to be moved and nursed safely, and definitive reconstruction follows once the patient is physiologically stable. Coordinating that sequence properly is what determines both survival and the eventual functional result.',
      },
    ],
    faqs: [
      {
        q: 'Does every fracture need surgery?',
        a: 'No. Many fractures heal well in a cast or brace when the fragments are in acceptable position and stay there. Surgery is needed when fragments are displaced and unstable, when the fracture involves a joint surface, when it is open, or when early movement is important to the final result — as it often is around the elbow and shoulder.',
      },
      {
        q: 'How long does a fracture take to heal?',
        a: 'Most adult fractures unite in roughly six to twelve weeks, though this varies considerably with the bone involved, the pattern of the fracture, your age and your general health. Returning to full function usually takes longer than the bone takes to heal, because strength and joint movement have to be rebuilt afterwards.',
      },
      {
        q: 'What is a nonunion, and can it be fixed?',
        a: 'A nonunion is a fracture that has failed to heal. Suggestive signs are ongoing pain and tenderness at the site months after injury and X-rays showing no progression. It is treatable — usually by re-establishing stable fixation and, where the biology is the problem, adding bone graft. Contributing factors such as smoking, infection or poor nutrition are addressed alongside.',
      },
      {
        q: 'Why do some fractures need a plate and others a rod?',
        a: 'The choice depends on the bone and the fracture pattern. Plates and screws hold fragments in precise anatomical position, which matters most for fractures involving joint surfaces. Intramedullary rods sit inside the shaft of long bones like the femur and tibia, share load with the bone and often allow earlier weight-bearing. Each suits different situations.',
      },
      {
        q: 'Why does a fracture that has healed still hurt?',
        a: 'Common reasons include stiffness and weakness in the surrounding muscles and joints, irritation from the implant itself, nerve irritation, or post-traumatic arthritis if the fracture involved a joint surface. Persistent pain months after a fracture has united is worth assessing rather than accepting, since several of these causes are treatable.',
      },
    ],
    footerNote:
      'Read more on <a href="/education/fracture-healing-surgery">how fractures heal and when surgery is needed</a> or <a href="/education/ankle-sprain-vs-fracture">ankle sprain vs. fracture</a>. See <a href="/procedures/trauma-surgery">trauma &amp; fracture surgery</a> with Dr. Ghag, or <a href="/book">book a consultation</a>.',
  },
};
