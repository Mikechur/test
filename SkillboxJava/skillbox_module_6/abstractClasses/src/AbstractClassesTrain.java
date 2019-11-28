import Clients.Client;
import Clients.IndividualEmployer;
import Clients.LegalFace;
import Clients.PhysicalFace;

public class AbstractClassesTrain {
    public static void main(String[] args) {
        PhysicalFace physicalFace = new PhysicalFace(500);
        physicalFace.putMoney(300);
        physicalFace.takeMoney(700);
        System.out.println("--------------------------");

        LegalFace legalFace = new LegalFace(500);
        legalFace.putMoney(700);
        legalFace.takeMoney(1200);
        System.out.println("--------------------------");

        IndividualEmployer individualEmployer = new IndividualEmployer(1000);
        individualEmployer.takeMoney(600);
        individualEmployer.putMoney(10);

    }
}
