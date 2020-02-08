import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class Hibernate {

    public static void main(String[] args) {
        StandardServiceRegistry registry = new StandardServiceRegistryBuilder().configure("hibernate.cfg.xml").build();
        Metadata metadata = new MetadataSources(registry).getMetadataBuilder().build();
        SessionFactory sessionFactory = metadata.getSessionFactoryBuilder().build();

        Session session = sessionFactory.openSession();
        Course course = session.get(Course.class, 4);
        System.out.println(
                 "id: " + course.getId() + "\n"
                        + "name: " + course.getName() + "\n"
                        + "duration: " + course.getDuration() + "\n"
                        + "type: " + course.getType() + "\n"
                        + "description: " + course.getDescription() + "\n"
                        + "teacherID: " + course.getTeacherId() + "\n"
                        + "studentsCount: " + course.getStudentsCount() + "\n"
                        + "price: " + course.getPrice() + "\n"
                        + "pricePerHour: " + course.getPricePerHour()
                );

        sessionFactory.close();
    }
}
