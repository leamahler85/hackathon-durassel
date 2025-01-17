<?php

namespace App\Repository;

use App\Entity\PostIt;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PostIt|null find($id, $lockMode = null, $lockVersion = null)
 * @method PostIt|null findOneBy(array $criteria, array $orderBy = null)
 * @method PostIt[]    findAll()
 * @method PostIt[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PostItRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PostIt::class);
    }

    // /**
    //  * @return PostIt[] Returns an array of PostIt objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PostIt
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
