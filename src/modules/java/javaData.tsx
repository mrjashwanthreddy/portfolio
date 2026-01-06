// Simple content model for the Java course/blog page
// - Sections (numbered) each with an id, title, and list of posts
// - Each post has a slug, title, and content (as JSX) so you can write rich examples
// - Optionally, a post can provide mdPath to render Markdown from ./content/* via Vite import
// To add more, just append to the sections array below.
import type { ReactNode } from 'react'

export type JavaPost = {
  slug: string
  title: string
  content?: ReactNode
  mdPath?: string // example: './content/welcome.md'
}

export type JavaSection = {
  id: string
  title: string
  items: JavaPost[]
}

export const javaSections: JavaSection[] = [
  // 1
  {
    id: 'intro',
    title: 'Introduction & How to Use This Course',
    items: [
      { slug: 'welcome', title: 'Introduction & How to Use This Course', mdPath: './content/s01/welcome.md' }
    ],
  },
  // 2
  {
    id: 'core-java',
    title: 'Core Java',
    items: [
      { slug: 'core-java-overview', title: 'Core Java', mdPath: './content/s02/core-java-overview.md' },
      { slug: 'variables-and-types', title: 'Variables and Data Types', mdPath: './content/s02/variables-and-types.md' },
      { slug: 'oops', title: 'Object-Oriented Programming (OOPs)', mdPath: './content/s02/oops.md' },
      { slug: 'control-flow', title: 'Flow Controls and Exceptions', mdPath: './content/s02/control-flow.md' },
      { slug: 'garbage-collection-and-annotations', title: 'Garbage Collection and Annotations', mdPath: './content/s02/garbage-collection-and-annotations.md' },
      { slug: 'class-structures-and-type-systems', title: 'Class Structures and Type Systems', mdPath: './content/s02/class-structures-and-type-systems.md' },
      { slug: 'others', title: 'Others', mdPath: './content/s02/others.md' },
      { slug: 'core-java-quiz', title: 'Quiz Time', mdPath: './content/s02/core-java-quiz.md' },
      { slug: 'how-java-code-works', title: 'How Java Code works?', mdPath: './content/s02/how-java-code-works.md' },
      { slug: 'write-your-first-java-program', title: 'Write your first Java Program', mdPath: './content/s02/write-your-first-java-program.md' },
      { slug: 'data-types-and-variables', title: 'Data Types and Variables', mdPath: './content/s02/data-types-and-variables.md' },
      { slug: '4-pillars-of-oops', title: '4 pillars of OOPs', mdPath: './content/s02/4-pillars-of-oops.md' },
      { slug: 'compile-time-and-runtime-polymorphism', title: 'Compile Time and Runtime Polymorphism', mdPath: './content/s02/compile-time-and-runtime-polymorphism.md' },
      { slug: 'difference-between-abstract-class-and-interface', title: 'Difference between abstract class and interface', mdPath: './content/s02/difference-between-abstract-class-and-interface.md' },
      { slug: 'immutable-nature-of-java-strings', title: 'Immutable Nature of Java Strings', mdPath: './content/s02/immutable-nature-of-java-strings.md' },
      { slug: 'string-builder-vs-string-buffer', title: 'String Builder vs String Buffer', mdPath: './content/s02/string-builder-vs-string-buffer.md' },
      { slug: 'basics-of-java-reflection', title: 'Basics of Java Reflection', mdPath: './content/s02/basics-of-java-reflection.md' },
      { slug: 'g1-garbage-collector', title: 'G1 Garbage Collector', mdPath: './content/s02/g1-garbage-collector.md' },
    ],
  },
  // 3
  {
    id: 'multithreading',
    title: 'Java Multithreading and Concurrency',
    items: [
      { slug: 'concurrency', title: 'Concurrency & Multithreading', mdPath: './content/s03/concurrency.md' },
      { slug: 'multithreading-quiz', title: 'Quiz Time', mdPath: './content/s03/multithreading-quiz.md' },
      { slug: 'beginners-guide-to-java-multithreading', title: "Beginner's Guide to Java Multithreading", mdPath: './content/s03/beginners-guide-to-java-multithreading.md' },
      { slug: 'atomic-volatile-and-synchronized', title: 'Atomic, Volatile, and Synchronized', mdPath: './content/s03/atomic-volatile-and-synchronized.md' },
      { slug: 'threadlocal-and-inheritablethreadlocal', title: 'ThreadLocal and InheritableThreadLocal in Java Multithreading', mdPath: './content/s03/threadlocal-and-inheritablethreadlocal.md' },
      { slug: 'virtual-threads-in-java-21', title: 'Virtual Threads in Java 21', mdPath: './content/s03/virtual-threads-in-java-21.md' },
      { slug: 'different-threadpools-in-executor-service', title: 'Different ThreadPools in Java Executor Service', mdPath: './content/s03/different-threadpools-in-executor-service.md' },
      { slug: 'producer-consumer-problem', title: 'Producer-Consumer problem', mdPath: './content/s03/producer-consumer-problem.md' },
      { slug: 'threadpoolexecutor-in-java', title: 'ThreadPoolExecutor in Java', mdPath: './content/s03/threadpoolexecutor-in-java.md' },
    ],
  },
  // 4
  {
    id: 'collections',
    title: 'Java Collections and Generics',
    items: [
      { slug: 'collections', title: 'Collections', mdPath: './content/s04/collections.md' },
      { slug: 'java-collections-utility-methods', title: 'Java Collections Utility Methods', mdPath: './content/s04/java-collections-utility-methods.md' },
      { slug: 'generics', title: 'Generics', mdPath: './content/s04/generics.md' },
      { slug: 'java-generics', title: 'Java Generics', mdPath: './content/s04/java-generics.md' },
      { slug: 'collections-quiz', title: 'Quiz Time', mdPath: './content/s04/collections-quiz.md' },
      { slug: 'collections-scenario-based-questions', title: 'Collections Scenario Based Questions', mdPath: './content/s04/collections-scenario-based-questions.md' },
    ],
  },
  // 5
  {
    id: 'io-nio',
    title: 'Java I/O and NIO',
    items: [
      { slug: 'io-and-nio', title: 'I/O and NIO', mdPath: './content/s05/io-and-nio.md' },
      { slug: 'java-nio-watch-service', title: 'Java NIO Watch Service', mdPath: './content/s05/java-nio-watch-service.md' },
      { slug: 'convert-file-to-path-object', title: 'Convert File to Path Object', mdPath: './content/s05/convert-file-to-path-object.md' },
    ],
  },
  // 6
  {
    id: 'design-patterns',
    title: 'Java Design Patterns',
    items: [
      { slug: 'design-patterns', title: 'Design Patterns', mdPath: './content/s06/design-patterns.md' },
      { slug: 'design-patterns-quiz', title: 'Quiz Time', mdPath: './content/s06/design-patterns-quiz.md' },
      { slug: 'creational-design-patterns', title: 'Creational Design Patterns', mdPath: './content/s06/creational-design-patterns.md' },
    ],
  },
  // 7
  {
    id: 'jdbc-jpa',
    title: 'JDBC, JPA and Hibernate',
    items: [
      { slug: 'jdbc', title: 'JDBC (Java Database Connectivity)', mdPath: './content/s07/jdbc.md' },
      { slug: 'jpa', title: 'JPA (Java Persistence API)', mdPath: './content/s07/jpa.md' },
      { slug: 'hibernate', title: 'Hibernate', mdPath: './content/s07/hibernate.md' },
    ],
  },
  // 8
  {
    id: 'java-9-25',
    title: 'Java 9 to 25 Essential Features',
    items: [
      { slug: 'java-8-features', title: 'Java 8 Features', mdPath: './content/s08/java-8-features.md' },
      { slug: 'java-streams-grouping-and-aggregation', title: 'Java Streams Grouping and Aggregation', mdPath: './content/s08/java-streams-grouping-and-aggregation.md' },
      { slug: 'java-9-to-23-essential-features', title: 'Java 9 to 23 Essential Features', mdPath: './content/s08/java-9-to-23-essential-features.md' },
      { slug: 'java-25-lts-important-features', title: 'Java 25 LTS Important Features', mdPath: './content/s08/java-25-lts-important-features.md' },
      { slug: 'future-and-completablefuture', title: 'Future and CompletableFuture', mdPath: './content/s08/future-and-completablefuture.md' },
      { slug: 'java-8-optional-class', title: 'Java 8 Optional Class', mdPath: './content/s08/java-8-optional-class.md' },
      { slug: 'java-streams', title: 'Java Streams', mdPath: './content/s08/java-streams.md' },
    ],
  },
  // 9
  {
    id: 'hands-on',
    title: 'Hands-On Java Practice Programs',
    items: [
      {
        slug: 'practice-programs',
        title: 'Practice Programs',
        mdPath: './content/s09/practice-programs.md',
      },
      { slug: 'download-140-plus-java-code-files', title: 'Download 140+ Java code files', mdPath: './content/s09/download-140-plus-java-code-files.md' },
      { slug: 'github-references-for-java-projects', title: 'Github References for Java Projects (For practice)', mdPath: './content/s09/github-references-for-java-projects.md' },
    ],
  },
  // 10
  {
    id: 'quiz',
    title: 'Java Quiz Time',
    items: [
      {
        slug: 'java-quizzes',
        title: 'Java Quizzes',
        mdPath: './content/s10/java-quizzes.md',
      },
    ],
  },
  // 11
  {
    id: 'spring-core',
    title: 'Spring Boot Core Concepts',
    items: [
      { slug: 'spring-core', title: 'Spring Core & DI', mdPath: './content/s11/spring-core.md' },
      { slug: 'introduction-to-spring-boot', title: 'Introduction to Spring Boot', mdPath: './content/s11/introduction-to-spring-boot.md' },
      { slug: 'spring-boot-core-concepts', title: 'Spring Boot Core Concepts', mdPath: './content/s11/spring-boot-core-concepts.md' },
      { slug: 'spring-boot-annotations', title: 'Spring Boot Annotations', mdPath: './content/s11/spring-boot-annotations.md' },
      { slug: 'spring-boot-actuator-and-profiles', title: 'Spring Boot Actuator and Profiles', mdPath: './content/s11/spring-boot-actuator-and-profiles.md' },
      { slug: 'spring-boot-run-method', title: 'Spring Boot Run Method', mdPath: './content/s11/spring-boot-run-method.md' },
      { slug: 'validations-in-spring-boot', title: 'Validations in Spring Boot', mdPath: './content/s11/validations-in-spring-boot.md' },
      { slug: 'relaxed-binding-in-spring-boot', title: 'Relaxed Binding in Spring Boot', mdPath: './content/s11/relaxed-binding-in-spring-boot.md' },
      { slug: 'properties-vs-yaml', title: 'Which is better, Properties or YAML?', mdPath: './content/s11/properties-vs-yaml.md' },
      { slug: 'qualifier-and-primary-annotations', title: 'Qualifier and Primary Annotations', mdPath: './content/s11/qualifier-and-primary-annotations.md' },
      { slug: 'spring-profiles', title: 'Spring Profiles', mdPath: './content/s11/spring-profiles.md' },
      { slug: 'fixeddelay-and-fixedrate-in-scheduling', title: 'FixedDelay and FixedRate in Scheduling', mdPath: './content/s11/fixeddelay-and-fixedrate-in-scheduling.md' },
      { slug: 'cron-expressions', title: 'CRON Expressions', mdPath: './content/s11/cron-expressions.md' },
      { slug: 'aop-in-spring-boot', title: 'AOP in Spring Boot', mdPath: './content/s11/aop-in-spring-boot.md' },
      { slug: 'actuator-in-spring-boot', title: 'Actuator in Spring Boot', mdPath: './content/s11/actuator-in-spring-boot.md' },
    ],
  },
  // 12
  {
    id: 'spring-apis',
    title: 'Spring Boot APIs and Data Access',
    items: [
      { slug: 'rest-and-security', title: 'REST APIs & Security', mdPath: './content/s12/rest-and-security.md' },
      { slug: 'building-rest-apis', title: 'Building REST APIs', mdPath: './content/s12/building-rest-apis.md' },
      { slug: 'spring-boot-data-access', title: 'Spring Boot Data Access', mdPath: './content/s12/spring-boot-data-access.md' },
      { slug: 'spring-boot-resilience4j', title: 'Spring Boot Resilience4j', mdPath: './content/s12/spring-boot-resilience4j.md' },
      { slug: 'caching-annotations-mongodb-redis', title: 'Caching Annotations in Spring Boot: MongoDB + Redis Tutorial', mdPath: './content/s12/caching-annotations-mongodb-redis.md' },
    ],
  },
  // 13
  {
    id: 'spring-security-testing',
    title: 'Spring Boot Security and Testing',
    items: [
      { slug: 'testing', title: 'Testing (JUnit, Mockito, Testcontainers)', mdPath: './content/s13/testing.md' },
      { slug: 'spring-boot-security', title: 'Spring Boot Security', mdPath: './content/s13/spring-boot-security.md' },
      { slug: 'spring-boot-testing', title: 'Spring Boot Testing', mdPath: './content/s13/spring-boot-testing.md' },
      { slug: 'jwt-authentication-with-spring-boot-3-and-mongodb', title: 'JWT Authentication with Spring Boot 3 and MongoDB', mdPath: './content/s13/jwt-authentication-with-spring-boot-3-and-mongodb.md' },
    ],
  },
  // 14
  {
    id: 'spring-microservices',
    title: 'Spring Boot Microservices and Deployment',
    items: [
      { slug: 'microservices', title: 'Microservices & Observability', mdPath: './content/s14/microservices.md' },
      { slug: 'spring-boot-microservices', title: 'Spring Boot Microservices', mdPath: './content/s14/spring-boot-microservices.md' },
      { slug: 'spring-boot-devops-and-deployment', title: 'Spring Boot DevOps and Deployment', mdPath: './content/s14/spring-boot-devops-and-deployment.md' },
      { slug: 'graphql-in-spring-boot', title: 'GraphQL in Spring Boot', mdPath: './content/s14/graphql-in-spring-boot.md' },
    ],
  },
  // 15
  {
    id: 'healthcare-project',
    title: 'Healthcare System Project (For Self Learning)',
    items: [
      { slug: 'healthcare-project', title: 'Healthcare System Project', mdPath: './content/s15/healthcare-project.md' },
      { slug: 'basics-of-docker', title: 'Basics of Docker', mdPath: './content/s15/basics-of-docker.md' },
      { slug: 'dockerizing-a-spring-boot-application', title: 'Dockerizing a Spring Boot Application', mdPath: './content/s15/dockerizing-a-spring-boot-application.md' },
      { slug: 'docker-compose', title: 'Docker Compose', mdPath: './content/s15/docker-compose.md' },
      { slug: 'inter-service-communication-in-docker-compose', title: 'Inter-Service Communication in Docker-Compose', mdPath: './content/s15/inter-service-communication-in-docker-compose.md' },
      { slug: 'run-mongodb-locally-using-docker', title: 'Run MongoDB on Your Local Machine Using Docker', mdPath: './content/s15/run-mongodb-locally-using-docker.md' },
      { slug: 'overview-of-healthcare-system-project', title: 'Overview of Healthcare System Project', mdPath: './content/s15/overview-of-healthcare-system-project.md' },
      { slug: 'setup-part-1-download-zip-source-code', title: 'Explanation and How to setup - Part 1 - Download Zip Folder (Source Code)', mdPath: './content/s15/setup-part-1-download-zip-source-code.md' },
      { slug: 'setup-part-2', title: 'Explanation and How to setup - Part 2', mdPath: './content/s15/setup-part-2.md' },
    ],
  },
  // 16
  {
    id: 'spring-boot-in-depth',
    title: 'Spring Boot: In-Depth Topics (In Progress Series)',
    items: [
      { slug: 'spring-boot-in-depth', title: 'In-Depth Topics', mdPath: './content/s16/spring-boot-in-depth.md' },
      { slug: 'exception-handling-in-spring-boot', title: 'Exception Handling in Spring Boot - Patterns & Best Practices', mdPath: './content/s16/exception-handling-in-spring-boot.md' },
      { slug: 'spring-security-in-depth', title: 'Spring Security In-Depth - Authentication, Authorization & Advanced Patterns', mdPath: './content/s16/spring-security-in-depth.md' },
      { slug: 'spring-aop-in-depth', title: 'Spring AOP In-Depth - Aspect-Oriented Programming Patterns & Best Practices', mdPath: './content/s16/spring-aop-in-depth.md' },
      { slug: 'spring-boot-actuator-and-observability', title: 'Spring Boot Actuator & Observability - Metrics, Health Checks, and Monitoring', mdPath: './content/s16/spring-boot-actuator-and-observability.md' },
      { slug: 'spring-boot-profiles-and-configuration-management', title: 'Spring Boot Profiles & Configuration Management - Environment-Specific Settings', mdPath: './content/s16/spring-boot-profiles-and-configuration-management.md' },
      { slug: 'spring-data-jpa-in-depth', title: 'Spring Data JPA In-Depth — Transactions, N+1, Auditing & Performance', mdPath: './content/s16/spring-data-jpa-in-depth.md' },
      { slug: 'testing-spring-boot-applications', title: 'Testing Spring Boot Applications - Unit, Integration & Testcontainers', mdPath: './content/s16/testing-spring-boot-applications.md' },
      { slug: 'logging-and-distributed-tracing-in-spring-boot', title: 'Logging & Distributed Tracing in Spring Boot - From Logs to Insights', mdPath: './content/s16/logging-and-distributed-tracing-in-spring-boot.md' },
    ],
  },
]

// Helpers
export const allPosts = javaSections.flatMap(s => s.items)
export const findPostBySlug = (slug?: string) => allPosts.find(p => p.slug === slug)
export const firstPost = () => allPosts[0]
