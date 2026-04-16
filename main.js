const app = document.getElementById("app");

const leads = [
  { name: "Rahul Sharma", role: "HR Manager", company: "Infosys" },
  { name: "Priya Mehta", role: "Recruiter", company: "TCS" }
];

app.innerHTML = `
  <h1>Leads</h1>
  ${leads.map(l => `
    <div style="border:1px solid #ccc;padding:10px;margin:10px;">
      <h3>${l.name}</h3>
      <p>${l.role} @ ${l.company}</p>
      <button onclick="generateMessage('${l.name}')">Generate Message</button>
      <div id="msg-${l.name}" style="margin-top:10px;"></div>
    </div>
  `).join("")}
`;

window.generateMessage = function(name) {
  const msg = document.getElementById(`msg-${name}`);
  msg.innerHTML = `
    <textarea style="width:100%;">Hi ${name}, I’d love to connect regarding opportunities.</textarea>
    <br/>
    <button onclick="alert('Approved')">Approve</button>
  `;
};
