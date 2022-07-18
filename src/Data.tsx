
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

export const allAcronyms: Acronym[] = [drabc, sample, socrates, lite]
