<?php

namespace App\Entity;

use App\Repository\ProjectRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProjectRepository::class)
 */
class Project
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="projects")
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @ORM\OneToOne(targetEntity=Board::class, mappedBy="project", cascade={"persist", "remove"})
     */
    private $board;

    public function __construct()
    {
        $this->user = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|User[]
     */
    // public function getUser(): Collection
    // {
    //     return $this->user;
    // }

    // public function addUser(User $user): self
    // {
    //     if (!$this->user->contains($user)) {
    //         $this->user[] = $user;
    //     }

    //     return $this;
    // }

    // public function removeUser(User $user): self
    // {
    //     $this->user->removeElement($user);

    //     return $this;
    // }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getBoard(): ?Board
    {
        return $this->board;
    }

    public function setBoard(?Board $board): self
    {
        // unset the owning side of the relation if necessary
        if ($board === null && $this->board !== null) {
            $this->board->setProject(null);
        }

        // set the owning side of the relation if necessary
        if ($board !== null && $board->getProject() !== $this) {
            $board->setProject($this);
        }

        $this->board = $board;

        return $this;
    }
}
