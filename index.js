//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)



function rackeadas(vitorias, derrotas) {
   return saldo = vitorias - derrotas;
  }

// escolha a qtd de vitorias,derrotas  
rackeadas(200,5)


// Estrutura de Decisão
if(saldo <10)
{
    nivel = "Ferro"
} else if (saldo >= 11 && saldo <= 20) 
    {
    nivel = "Bronze";
} else if (saldo >= 21 && saldo <= 50) 
    {
    nivel = "Prata";
} else if (saldo >= 51 && saldo <= 80) 
    {
    nivel = "Ouro";
} else if (saldo >= 81 && saldo <= 90) 
    {
    nivel = "Diamante";
} else if (saldo >= 91 && saldo <= 100) 
    {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

//Output
console.log ("O Herói tem o saldo de " + saldo + " está no nível de " + nivel)

