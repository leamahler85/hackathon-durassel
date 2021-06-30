<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Board;
use App\Repository\BoardRepository;
use App\Repository\UserRepository;
use JMS\Serializer\SerializerInterface;
use PHPUnit\Util\Json;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

/**
 * @Route("/api", name="api_")
 */
class ApiController extends AbstractController
{

    /**
     * @Route("/user", name="user")
     */
    public function index(BoardRepository $boardRepository, SerializerInterface $serializer): JsonResponse
    {
      return new JsonResponse($serializer->serialize($boardRepository->findOneById(1), 'json'), 200, [], true);
    }

    /**
      * @Route("/login", name="login", methods={"post"})
      */
    public function login(AuthenticationUtils $authenticationUtils, SerializerInterface $serializer): Response
    {
        return new JsonResponse($serializer->serialize($this->getUser(), 'json'), 200, [], true);
    }

    /**
      * @Route("/logout", name="logout")
      */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    // Board Controller
    
    /**
     * @Route("/board/{id}/edit", name="board_edit", methods={"GET", "POST"})
     */
    public function editBoard(Request $request, BoardRepository $boardRepository, Board $board, SerializerInterface $serializer): JsonResponse
    {
        $form = $this->createForm(BoardType::class, $board);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('board_index');
        }

        return new JsonResponse($serializer->serialize($boardRepository->findOneById($this->getUser()), 'json'), 200, [], true);
    }

        /**
     * @Route("/board/{id}", name="board_show", methods={"GET"})
     */
    public function showBoard(Board $board, BoardRepository $boardRepository, SerializerInterface $serializer): JsonResponse
    {
      return new JsonResponse($serializer->serialize($boardRepository->findOneById($this->getUser()), 'json'), 200, [], true);
    }

}
