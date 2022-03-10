let nota = 80;

switch (nota) {
    case nota>=80:
        console.log("parabéns, você foi aprovado!");
        break;
    
    case nota >= 60:
        console.log("Você está em nossa lista de espera");
        break;

    case nota < 60:
        console.log("Você foi reprovado");
        break;

    default:
        console.log("não se aplica");
}