import java.lang.reflect.Array;
import java.util.Arrays;

public class EnglishText {
    public static void main(String[] args){
        String text = "Under the Tudors and the later Stuart dynasty, England became a colonial power." +
                "During the rule of the Stuarts, the English Civil War took place between the Parliamentarians and the Royalists," +
                " which resulted in the execution of King Charles I (1649) and the establishment of a series of republican" +
                " governments — first, a Parliamentary republic known as the Commonwealth of England (1649–1653), then a military" +
                " dictatorship under Oliver Cromwell known as The Protectorate (1653–1659). The Stuarts returned to the restored" +
                " throne in 1660, though continued questions over religion and power resulted in the deposition of another " +
                "Stuart king, James II, in the Glorious Revolution (1688). England, which had subsumed Wales in the 16th century" +
                " under Henry VIII, united with Scotland in 1707 to form a new sovereign state called Great Britain.[4][5][6] " +
                "Following the Industrial Revolution, Great Britain ruled a colonial Empire, the largest in recorded history." +
                " Following a process of decolonisation in the 20th century, mainly caused by the weakening of Great Britain's" +
                " power in the two World Wars, almost all of the empire's overseas territories became independent countries." +
                " However, as of 2018, its cultural impact remains widespread and deep in many of them.";

        String StringWithOutDoubleSpaces = text.replaceAll("[^\\w']", " ");
        System.out.println(Arrays.toString(StringWithOutDoubleSpaces.split("\\s+")));
    }
}
