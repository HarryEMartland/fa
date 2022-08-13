
export interface Acronym {
  name: string
  letters: Letter[]
}

export interface Letter {
  name: string
  description: string
}

export const socrates: Acronym = {
  name: 'SOCRATES',
  letters: [
    { name: 'Site', description: 'Where is the pain? Or the maximal site of the pain.' },
    {
      name: 'Onset',
      description: 'When did the pain start, and was it sudden or gradual? Include also whether it is progressive or regressive.'
    },
    { name: 'Character', description: 'What is the pain like? An ache? Stabbing?' },
    { name: 'Radiation', description: 'Does the pain radiate anywhere?' },
    { name: 'Associations', description: 'Any other signs or symptoms associated with the pain?' },
    { name: 'Time', description: 'course Does the pain follow any pattern?' },
    { name: 'Exacerbating / relieving factors', description: 'factors Does anything change the pain?' },
    { name: 'Severity', description: 'How bad is the pain?' }
  ]
}
export const drabc: Acronym = {
  name: 'DRsABCs',
  letters: [
    { name: 'Danger', description: 'Before approaching the casualty, always make sure the area is safe.' },
    {
      name: 'Response',
      description: 'Check if the casualty is responsive or unresponsive. As you approach them, introduce yourself and ask them questions to see if you can get a response. Kneel next to their chest and gently shake their shoulders, asking, ‘What has happened?’, ‘Open your eyes!’.'
    },
    { name: 'Shout', description: 'Get the attention of a someone else. You may need their assistance shortly' },
    {
      name: 'Airway',
      description: 'Next, you need to check that the airway is open and clear. Open the airway by placing one hand on the forehead to tilt the head back and use two fingers from the other hand to lift the chin. Check for any obstructions'
    },
    {
      name: 'Breathing',
      description: 'You now need to check if the casualty is breathing normally. Place your ear above their mouth, looking down their body. Listen for sounds of breathing and see if you can feel their breath on your cheek. Watch to see if their chest moves. Do this for 10 seconds.'
    },
    {
      name: 'Circulation',
      description: 'Once you have established they are breathing, look and check for any signs of severe bleeding.'
    },
    {
      name: 'Send Help',
      description: 'Call for assistance and if you have someone near by ask them to fetch a defibrillator'
    }
  ]
}

export const sample: Acronym = {
  name: 'SAMPLE',
  letters: [
    {
      name: 'Signs/Symptoms',
      description: 'A symptom is a manifestation of disease apparent to the patient themself, while a sign is a manifestation of disease that you can perceive.'
    },
    {
      name: 'Allergy',
      description: 'Do they have any allergies? For example, nuts or any medication such as penicillin or aspirin?'
    },
    { name: 'Medication', description: 'Are they taking any medication?' },
    {
      name: 'Previous medical history',
      description: 'Do they suffer from any medical condition such as diabetes, epilepsy or heart disease? Have they had any previous injuries or surgery?'
    },
    { name: 'Last meal', description: 'When did they last eat or drink?' },
    {
      name: 'Event history',
      description: 'What happened and where? Is the incident due to an illness or an accident? Ask any people nearby what happened and look for any clues that may give you more information.'
    }
  ]
}

export const lite: Acronym = {
  name: 'LITE',
  letters: [
    { name: 'Load', description: 'This means considering the object or person that is being moved and looking at how this may affect health and safety. For example, is the load particularly heavy, bulky, hard to grasp or unstable?' },
    { name: 'Individual', description: 'This means you should consider the person who will be carrying out the manual handling activity. Will it be you or another colleague? For example, how strong, fit or able is the person? Are they capable of manual handling alone or do they need assistance?' },
    { name: 'Task', description: 'This means that you should consider the manual handling activity itself. What does the task involve and how it may affect your health and safety? For example, does the task involve repetitive movements or uneven weight distribution?' },
    { name: 'Environment', description: 'This means considering the area in which the load is being moved and looking at how this could potentially make the manual handling activity unsafe. For example, is the floor slippery or uneven, and is there sufficient lighting?' }]
}

export const avpu: Acronym = {
  name: 'AVPU',
  letters: [
    { name: 'Alert', description: 'Patient is fully awake (though not necessarily orientated), will have spontaneously open eyes, and will respond to voice (thought may be confused). They will have bodily motor function.' },
    { name: 'Voice', description: 'The patient makes some sort of response when you talk to them. This could be through the eyes, which open when you speak to them, or by voice which may only be as little as a grunt. Or, it could be by moving a limb when prompted to do so by the rescuer.' },
    { name: 'Pressure', description: 'A patient may respond by using any of the three components when pain stimulus is used on them (Eyes, Voice, Movement). Recognised methods for causing pain are pinching the ear or pressing into the bed of a fingernail. A fully conscious patient will locate the pain and push it away, whereas a patient who is not alert and not responded to voice may only manifest involuntary flexion or extension of a limb. Performing pain stimulus should be used with caution as in extreme circumstances this could be considered assault.' },
    { name: 'Unresponsive', description: 'This outcome is noted if the patient does not give any Eye, Voice or Motor response to voice or pain.' }
  ]
}

export const rice: Acronym = {
  name: 'RICE',
  letters: [
    { name: 'Rest', description: 'Adding additional stress on the sprain, such as standing or walking, can lead to pain, further swelling, and, even, additional injury. It’s a good policy to let the injured joint rest, then have a medical professional complete a thorough exam.' },
    { name: 'Ice', description: 'Applying a cold pack helps control, or may even reduce, the swelling. Holding ice on the injury may help lessen the pain and inflammatory response caused by increased blood flow.' },
    { name: 'Comfort', description: 'When there is an increase in inflammation there is often an increase in fluid accumulation in the affected areas. This increase in fluids causes increased pain, reduced mobility, and lessened blood flow. Elastic compression helps control the amount of fluid that accumulates and reduces pain and swelling.' },
    { name: 'Elevate', description: 'Elevating the injured area helps promote blood flow return to the body. For example, a sprained ankle can be elevated to promote better blood flow to control the swelling and reduce the pain.' }
  ]
}

export const ashice: Acronym = {
  name: 'ASHICE',
  letters: [
    { name: 'Age', description: 'Patient\'s age' },
    { name: 'Sex', description: 'Whether the patient is male or female' },
    { name: 'History', description: 'The immediate cause of injury or description of illness and any relevant preceding factors such as medical history and medicines taken or not taken' },
    { name: 'Injuries/Illness', description: 'What injuries have been sustained, or what illness symptoms are presenting' },
    { name: 'Condition', description: 'Observations of the patient (pulse, BP etc.), interventions used (cannulation, intubation etc.)' },
    { name: 'Events', description: 'Events leading up to (everything else)' }
  ]
}

export const allAcronyms: Acronym[] = [drabc, sample, socrates, lite, avpu, rice, ashice]

export interface Obs {
  name: string
  shortName: string
  low: number
  high: number
}

export const resps: Obs = {
  name: 'Respiration Rate',
  shortName: 'RR',
  low: 12,
  high: 20
}

export const o2: Obs = {
  name: 'SpO2',
  shortName: 'O2',
  low: 94,
  high: 98
}

export const o2COPD: Obs = {
  name: 'SpO2 COPD',
  shortName: 'O2C',
  low: 88,
  high: 92
}

export const sBp: Obs = {
  name: 'Systolic blood pressure',
  shortName: 'sBP',
  low: 100,
  high: 150
}

export const dBp: Obs = {
  name: 'Diastolic blood pressure',
  shortName: 'dBP',
  low: 50,
  high: 100
}

export const nBp: Obs = {
  name: 'Normal blood pressure',
  shortName: 'BP',
  low: 80,
  high: 120
}

export const pulse: Obs = {
  name: 'Pulse',
  shortName: 'PR',
  low: 60,
  high: 80
}

export const temp: Obs = {
  name: 'Temperature',
  shortName: 'T',
  low: 36,
  high: 38
}

export const bm: Obs = {
  name: 'Blood Glucose',
  shortName: 'BM',
  low: 4,
  high: 8
}

// todo respiratory arrest < 10

export const allObs : Obs[] = [resps, o2, sBp, nBp, pulse, temp, bm]

export const preCheckList = {
  name: 'Pre Game Checklist',
  list: [
    { name: 'Unlock cupboards' },
    { name: 'Room checklist' },
    { name: 'Grab bag Checklist' },
    { name: 'Show new people around' }
  ]
}

export const postCheckList = {
  name: 'Post Game Checklist',
  list: [
    { name: 'Return drinks containers if running low' },
    { name: 'Check area is clear of supporters' },
    { name: 'Lock cupboards' },
    { name: 'Turn off lights' },
    { name: 'Return room box' }
  ]
}

export const grabBagChecklist = {
  name: 'Grab Bag Checklist',
  list: [
    { name: 'PRF', quantity: 5, images: ['images/test.png', 'images/test.png'] },
    { name: 'Clinical waste bag', quantity: 1 },
    { name: 'Gloves small', quantity: 1 },
    { name: 'Gloves medium', quantity: 1 },
    { name: 'Gloves large', quantity: 1 },
    { name: 'Triangular Bandages', quantity: 1 },
    { name: 'Eye Pad', quantity: 1 },
    { name: 'Dressings No. 2', quantity: 1 },
    { name: 'Dressings No. 3', quantity: 1 },
    { name: 'Dressing No. 1', quantity: 1 },
    { name: 'Conforming Bandages 10cm', quantity: 1 },
    { name: 'Conforming Bandages 7cm', quantity: 1 },
    { name: 'Conforming Bandages 5cm', quantity: 1 },
    { name: 'Normasol', quantity: 1 },
    { name: 'None Adherent Dressing 5cm', quantity: 1 },
    { name: 'None Adherent Dressing 7cm', quantity: 1 },
    { name: 'None Adherent Dressing 10cm', quantity: 1 },
    { name: 'Micropore', quantity: 1 },
    { name: 'Bag Gauze', quantity: 1 },
    { name: 'Tough cuts', quantity: 1 },
    { name: 'Safety Pins', quantity: 1 },
    { name: 'Eye Wash', quantity: 1 },
    { name: 'Vomit Bags', quantity: 1 },
    { name: 'Vent Aid', quantity: 1 },
    { name: 'Pen Torch', quantity: 1 },
    { name: 'Ice Packs', quantity: 1 },
    { name: 'Plasters Blue', quantity: 1 },
    { name: 'Plasters Normal', quantity: 1 }
  ]
}
