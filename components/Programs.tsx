const programs = [
  {
    num: '01',
    ghost: 'I',
    name: 'Mental Health',
    desc: 'Expanding access to compassionate mental health services — counseling, community support, and crisis intervention for underserved populations who deserve care without barriers.'
  },
  {
    num: '02',
    ghost: 'II',
    name: 'Substance Recovery',
    desc: 'Funding evidence-based recovery programs that address the root causes of addiction with dignity, medical expertise, and long-term community support that changes lives.'
  },
  {
    num: '03',
    ghost: 'III',
    name: 'Surgical Access',
    desc: 'Providing life-saving surgeries to individuals who cannot afford care by partnering with top surgical teams to eliminate every financial barrier to life-changing treatment.'
  },
  {
    num: '04',
    ghost: 'IV',
    name: 'Youth Education',
    desc: 'Expanding access to quality education for young people through scholarships, mentorship, and learning resources — equipping the next generation with the knowledge, confidence, and opportunity to reach their full potential and shape a more equitable future.'
  }
];

export default function Programs() {
  return (
    <div id="programs" className="programs-wrap">
      <div className="programs-inner">
        <div className="prog-header">
          <p className="sec-label reveal">What We Fund</p>
          <h2 className="sec-title reveal">Four pillars of <em>transformative</em> care</h2>
        </div>
        <div className="prog-grid">
          {programs.slice(0, 3).map((prog, i) => (
            <div key={prog.num} className={`prog-card reveal ${i === 1 ? 'd1' : i === 2 ? 'd2' : ''}`}>
              <p className="prog-name">{prog.name}</p>
              <p className="prog-desc">{prog.desc}</p>
            </div>
          ))}
        </div>
        <div className="prog-grid-bottom">
          <div className="prog-card prog-card--wide reveal d1">
            <p className="prog-name">{programs[3].name}</p>
            <p className="prog-desc">{programs[3].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
