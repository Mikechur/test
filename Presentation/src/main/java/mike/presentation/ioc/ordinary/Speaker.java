package mike.presentation.ioc.ordinary;


// Класс Speaker зависит от класса HelloSpeachWriter
public class Speaker {
    private HelloSpeachWriter writer = new HelloSpeachWriter();

    // две зависимости - процесс речи и сама речь..
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