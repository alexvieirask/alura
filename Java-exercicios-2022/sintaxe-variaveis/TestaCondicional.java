public class TestaCondicional {
    public static void main(String[] args) {
        System.out.println("Testando condicional");
        int idade = 10;
        int idadeMinima = 18;
        int quantidadePessoas = 2;
        String fraseDaIdade = "Você possue " + idade + " anos de idade";

        if (idade >= idadeMinima) {
            System.out.println("Seu acesso está liberado!");

        } else {
            if (quantidadePessoas >= 2) {
                System.out.println("Seu acesso está liberado devido a quantidade de acompanhantes!");

            } else {
                System.out.println("Você não está autorizado a entrar! Você deve ter no minimo 18 anos de idade ou estar acompanhado de no minimo duas pessoas.");
            }
        }

        System.out.println(fraseDaIdade);
    }
}