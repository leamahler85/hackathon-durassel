<?php

namespace App\DataFixtures;

use App\Entity\Board;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker;

class BoardFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $fakerBoard = Faker\Factory::create('fr_FR');
        $fakerBoard->seed('1234');
        $boards = [];

        for ($i = 0; $i < 3; $i++)
        {
            $boards[$i] = new Board;
            $boards[$i]->setName($fakerBoard->company());
            $boards[$i]->addUser($this->getReference('customer_' . $i));
            $boards[$i]->addUser($this->getReference('freelance_' . $i));
            $manager->persist($boards[$i]);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
        ];
    }
}
