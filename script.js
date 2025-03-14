document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-contact");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const data = {
      service_id: "service_zuimj2h", 
      template_id: "template_boznzi9", 
      user_id: "oXgjUOieAkOU1o3ei", 
      template_params: {
        nome: nome,
        email: email,
        mensagem: mensagem
      }
    };

    console.log("🔄 Enviando requisição para EmailJS...", data);

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return "OK"; 
        }
        throw new Error("Erro ao enviar email: " + response.statusText);
      })
      .then(result => {
        alert("✅ Mensagem enviada com sucesso!");
        console.log("✅ Email enviado com sucesso!", result);
        form.reset(); 
      })
      .catch(error => {
        console.error("❌ Erro ao enviar email:", error);
        alert("❌ Erro ao enviar email. Verifique o console para mais detalhes.");
      });
  });
});


