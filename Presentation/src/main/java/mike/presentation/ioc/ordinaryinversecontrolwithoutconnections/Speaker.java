package mike.presentation.ioc.ordinaryinversecontrolwithoutconnections;

// заменив на интерфейс мы отвязали класс
// протестировать будет проще, поскольку можно будет
// передать в конструктор на 100% правильную заглушку
// и при тестировании метода speak не будет сомнений
// что writer.getSpeach выдаст ошибку, только лишь сам метод

// speaker - модуль верхнего уровня
// hellospeachwriter, gospeachwriter - модули нижнего уровня - они же и детали абстракции
// speachwriter - абстракция
public class Speaker {
    private SpeachWriter writer;

    public Speaker(SpeachWriter writer) {
        this.writer = writer;
    }
    public void speak(){
        System.out.println(writer.getSpeach());
    }

}

class HelloSpeachWriter implements SpeachWriter{
    @Override
    public String getSpeach() {
        return "Hello guys";
    }
}

class GoSpeachWriter implements SpeachWriter{
    @Override
    public String getSpeach() {
        return "Go go go!!";
    }
}

interface SpeachWriter{
    public String getSpeach();
}