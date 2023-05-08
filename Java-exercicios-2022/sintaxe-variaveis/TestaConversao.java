public class TestaConversao {
    public static void main(String[] args) {
        double salario = 1290.40;

        int salarioInteiro = (int) salario;

        System.out.println("Salário inteiro:" + salarioInteiro);

        long numeroGigante = 3231231242344343999L;
        short numeroPequeno = 2131;
        byte b = 127;

        System.out.println("Número grande:" + numeroGigante);
        System.out.println("Número pequeno:" + numeroPequeno);
        System.out.println("tipo byte:" + b);

    }

}
