package mike.presentation.ioc.ordinaryinversecontrol;

// В данном примере класс не отвечает за инициализацию переменной.
// Инициализация происходит где-то в другом месте программы
public class Speaker {
    private HelloSpeachWriter writer;

    public Speaker(HelloSpeachWriter writer) {
        this.writer = writer;
    }

    public void speak(){
        System.out.println(writer.getSpeach());
    }

}

class HelloSpeachWriter{
    public String getSpeach(){
        return "Hello guys!";
    }
}

class GoSpeachWriter{
    public String getSpeach(){
        return "Go go go!";
    }
}