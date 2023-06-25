FROM openjdk:17-jdk-alpine
ARG JAR_FILE=build/libs/*.jar
COPY ./target/tech_prototype-0.0.1-SNAPSHOT.jar app.jar
COPY src/main/resources/static/csvData/f_hotel.csv /app/csvData/f_hotel.csv
COPY ./src/main/resources/static/csvData/f_camp_site.csv /app/csvData/f_camp_site.csv
COPY ./src/main/resources/static/csvData/f_guest_house.csv /app/csvData/f_guest_house.csv
COPY ./src/main/resources/static/csvData/f_alpine_hut.csv /app/csvData/f_alpine_hut.csv

ENTRYPOINT ["java","-jar","/app.jar"]