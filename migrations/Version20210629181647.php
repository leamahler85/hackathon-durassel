<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210629181647 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE board (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE comment (id INT AUTO_INCREMENT NOT NULL, post_it_id INT DEFAULT NULL, text VARCHAR(255) DEFAULT NULL, INDEX IDX_9474526CB8464527 (post_it_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE post_it (id INT AUTO_INCREMENT NOT NULL, board_id INT DEFAULT NULL, post_it_text VARCHAR(255) DEFAULT NULL, link VARCHAR(255) DEFAULT NULL, video_path VARCHAR(255) DEFAULT NULL, image_path VARCHAR(255) DEFAULT NULL, vote_up INT DEFAULT NULL, vote_down INT DEFAULT NULL, position VARCHAR(255) DEFAULT NULL, type VARCHAR(50) DEFAULT NULL, INDEX IDX_563E1348E7EC5785 (board_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, board_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), INDEX IDX_8D93D649E7EC5785 (board_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CB8464527 FOREIGN KEY (post_it_id) REFERENCES post_it (id)');
        $this->addSql('ALTER TABLE post_it ADD CONSTRAINT FK_563E1348E7EC5785 FOREIGN KEY (board_id) REFERENCES board (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649E7EC5785 FOREIGN KEY (board_id) REFERENCES board (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE post_it DROP FOREIGN KEY FK_563E1348E7EC5785');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649E7EC5785');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CB8464527');
        $this->addSql('DROP TABLE board');
        $this->addSql('DROP TABLE comment');
        $this->addSql('DROP TABLE post_it');
        $this->addSql('DROP TABLE user');
    }
}
