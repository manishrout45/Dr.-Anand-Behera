// Shared data describing the procedural spine curve and the three
// rotation "stages" the visitor scrolls through, each surfacing a
// different clinical region and its marked points of interest.

// t = 0 -> top of cervical spine, t = 1 -> base of lumbar spine
export const STAGES = [
  {
    id: 'cervical',
    label: 'Cervical Spine',
    range: [0.0, 0.34],
    tRange: [0.03, 0.28],
    rotationDeg: [0, 70],
    markers: [
      {
        t: 0.07,
        side: 1,
        title: 'C1–C2 Instability',
        note: 'Atlantoaxial segment, monitored for rotational instability.',
      },
      {
        t: 0.2,
        side: -1,
        title: 'C5–C6 Disc Herniation',
        note: 'Common level for cervical radiculopathy and nerve impingement.',
      },
    ],
  },
  {
    id: 'thoracic',
    label: 'Thoracic Spine',
    range: [0.34, 0.67],
    tRange: [0.32, 0.62],
    rotationDeg: [70, 150],
    markers: [
      {
        t: 0.4,
        side: 1,
        title: 'T4–T7 Kyphotic Curve',
        note: 'Natural outward curve, assessed for hyperkyphosis.',
      },
      {
        t: 0.55,
        side: -1,
        title: 'Costovertebral Joint',
        note: 'Rib-to-vertebra articulation, a source of referred pain.',
      },
    ],
  },
  {
    id: 'lumbar',
    label: 'Lumbar Spine',
    range: [0.67, 1.0],
    tRange: [0.68, 0.95],
    rotationDeg: [150, 250],
    markers: [
      {
        t: 0.75,
        side: 1,
        title: 'L4–L5 Degeneration',
        note: 'Highest load-bearing level, frequent site of disc wear.',
      },
      {
        t: 0.88,
        side: -1,
        title: 'L5–S1 Stenosis',
        note: 'Narrowing of the canal where lumbar meets sacrum.',
      },
    ],
  },
]

export function getActiveStageIndex(progress) {
  for (let i = 0; i < STAGES.length; i++) {
    const [start, end] = STAGES[i].range
    if (progress >= start && progress < end) return i
  }
  return STAGES.length - 1
}
