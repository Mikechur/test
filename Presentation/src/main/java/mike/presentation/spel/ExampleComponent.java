package mike.presentation.spel;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class ExampleComponent {
    public List<String> workers = new ArrayList<>();
    public Map<String,Integer> salaryByWorkers = new HashMap<>();

    @Value("#{exampleComponent.salaryByWorkers['John']}")
    public Integer johnSalary;

    @Value("#{exampleComponent.salaryByWorkers['George']}")
    public Integer georgeSalary;

    @Value("#{exampleComponent.salaryByWorkers['Sisie']}")
    public Integer sisieSalary;

    @Value("#{exampleComponent.workers[0]}")
    public String firstWorker;

    @Value("#{exampleComponent.workers[3]}")
    public String lastWorker;

    public ExampleComponent(){
        workers.add("John");
        workers.add("Sisie");
        workers.add("Alex");
        workers.add("George");

        salaryByWorkers.put("John",35000);
        salaryByWorkers.put("Sisie",47000);
        salaryByWorkers.put("Alex",11000);
        salaryByWorkers.put("George",15000);

    }

}
