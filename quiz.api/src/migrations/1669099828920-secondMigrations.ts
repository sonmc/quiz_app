import {MigrationInterface, QueryRunner} from "typeorm";

export class secondMigrations1669099828920 implements MigrationInterface {
    name = 'secondMigrations1669099828920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`question\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`categoryId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`answer\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`isCorrect\` tinyint NOT NULL, \`questionId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`exam\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`classes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`question_exam\` (\`id\` int NOT NULL AUTO_INCREMENT, \`questionId\` int NULL, \`examId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fullname\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`dob\` int NOT NULL, \`address\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student_answer\` (\`id\` int NOT NULL AUTO_INCREMENT, \`studentId\` int NULL, \`answerId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student_class\` (\`id\` int NOT NULL AUTO_INCREMENT, \`studentId\` int NULL, \`classId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fullname\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`question\` ADD CONSTRAINT \`FK_b8dd754e373b56714ddfa8f545c\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`answer\` ADD CONSTRAINT \`FK_a4013f10cd6924793fbd5f0d637\` FOREIGN KEY (\`questionId\`) REFERENCES \`question\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`question_exam\` ADD CONSTRAINT \`FK_40e8617fa6662701291f9d4790d\` FOREIGN KEY (\`questionId\`) REFERENCES \`question\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`question_exam\` ADD CONSTRAINT \`FK_305b86b32434be5e25c0c65d0fe\` FOREIGN KEY (\`examId\`) REFERENCES \`exam\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`student_answer\` ADD CONSTRAINT \`FK_4827af87118435ca77775e8c22f\` FOREIGN KEY (\`studentId\`) REFERENCES \`student\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`student_answer\` ADD CONSTRAINT \`FK_d831458b7821315bd808489e2d9\` FOREIGN KEY (\`answerId\`) REFERENCES \`answer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`student_class\` ADD CONSTRAINT \`FK_54d9dc074a5b2c5a75514e2223f\` FOREIGN KEY (\`studentId\`) REFERENCES \`student\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`student_class\` ADD CONSTRAINT \`FK_509d644c30e7b1d6dd4aa35c384\` FOREIGN KEY (\`classId\`) REFERENCES \`classes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`student_class\` DROP FOREIGN KEY \`FK_509d644c30e7b1d6dd4aa35c384\``);
        await queryRunner.query(`ALTER TABLE \`student_class\` DROP FOREIGN KEY \`FK_54d9dc074a5b2c5a75514e2223f\``);
        await queryRunner.query(`ALTER TABLE \`student_answer\` DROP FOREIGN KEY \`FK_d831458b7821315bd808489e2d9\``);
        await queryRunner.query(`ALTER TABLE \`student_answer\` DROP FOREIGN KEY \`FK_4827af87118435ca77775e8c22f\``);
        await queryRunner.query(`ALTER TABLE \`question_exam\` DROP FOREIGN KEY \`FK_305b86b32434be5e25c0c65d0fe\``);
        await queryRunner.query(`ALTER TABLE \`question_exam\` DROP FOREIGN KEY \`FK_40e8617fa6662701291f9d4790d\``);
        await queryRunner.query(`ALTER TABLE \`answer\` DROP FOREIGN KEY \`FK_a4013f10cd6924793fbd5f0d637\``);
        await queryRunner.query(`ALTER TABLE \`question\` DROP FOREIGN KEY \`FK_b8dd754e373b56714ddfa8f545c\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`student_class\``);
        await queryRunner.query(`DROP TABLE \`student_answer\``);
        await queryRunner.query(`DROP TABLE \`student\``);
        await queryRunner.query(`DROP TABLE \`question_exam\``);
        await queryRunner.query(`DROP TABLE \`classes\``);
        await queryRunner.query(`DROP TABLE \`exam\``);
        await queryRunner.query(`DROP TABLE \`answer\``);
        await queryRunner.query(`DROP TABLE \`question\``);
        await queryRunner.query(`DROP TABLE \`category\``);
    }

}
