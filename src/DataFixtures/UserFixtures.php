<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $fakerUser = Faker\Factory::create('fr_FR');
        $fakerUser->seed('1234');
        $customers = [];
        $freelance = [];

        for ($i = 0; $i < 3; $i++)
        {
            $customers[$i] = new User;
            $customers[$i]->setEmail($fakerUser->email());
            $customers[$i]->setPassword($this->passwordEncoder->encodePassword($customers[$i], 'user1234'));
            $customers[$i]->setFirstname($fakerUser->firstName($gender = 'male'|'female'));
            $customers[$i]->setLastname($fakerUser->lastName());
            $customers[$i]->setRoles(['ROLE_CUSTOMER']);
            $this->setReference('customer_' . $i, $customers[$i]);
            $manager->persist($customers[$i]);
        }

        for ($i = 0; $i < 3; $i++)
        {
            $freelance[$i] = new User;
            $freelance[$i]->setEmail($fakerUser->email());
            $freelance[$i]->setPassword($this->passwordEncoder->encodePassword($freelance[$i], 'user1234'));
            $freelance[$i]->setFirstname($fakerUser->firstName($gender = 'male'|'female'));
            $freelance[$i]->setLastname($fakerUser->lastName());
            $freelance[$i]->setRoles(['ROLE_FREELANCE']);
            $this->setReference('freelance_' . $i, $freelance[$i]);
            $manager->persist($freelance[$i]);
        }


        $manager->flush();
    }
}
