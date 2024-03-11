// react
import { useEffect, useState } from 'react'

// componentes
import Card from '../../components/card'
import CardPostUser from '../../components/cardPostUser';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../redux/user/actions';

// icons
import { FaArrowLeft, FaArrowRight, FaFileUpload } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

// CSS
import * as Styled from './styles'

const Home = () => {
    const { user } = useSelector(rootReducer => rootReducer.userReducer)
    const [pageAtual, setPageAtual] = useState(1)
    const [dados, setDados] = useState([])
    const [loading, setLoading] = useState(false)
    const [alt_description, setDescription] = useState()
    const [img, setImg] = useState()
    const dispatch = useDispatch()
    const key = 'fuPzDi-JgPOBfL7QMmHQYKcgmMGfQ6-VmZEUXOhhbKw'
    const url = `https://api.unsplash.com/photos/?per_page=24&client_id=${key}&page=${pageAtual}`

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const res = await fetch(url)
                const data = await res.json()
                setDados(data)
            } catch (error) {
                console.log(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [pageAtual])
    console.log(dados)

    const handleMorePage = () => {
        if (loading) return;
        setPageAtual((prevPage) => {
            const nextPage = prevPage + 1;
            return nextPage;
        });
        window.scrollTo({ top: 0 });
    };

    const handleLessPage = () => {
        if (loading) return;

        setPageAtual((prevPage) => {
            const nextPage = prevPage - 1;
            return nextPage < 1 ? 1 : nextPage;
        });
        window.scrollTo({ top: 0 });
    };

    const handleCreatePost = async (e) => {
        e.preventDefault();

        const newPost = {
            img,
            alt_description,
            username: user.displayName,
            id: Date.now().toString(),
        };

        dispatch(createPost(newPost));
        setImg("");
        setDescription("");
    };

    return (
        <Styled.Div >
            {user.login &&
                <Styled.CreatePost onSubmit={handleCreatePost}>
                    <Styled.InputBox>
                        <Styled.HomeLabel htmlFor='img'><FaFileUpload />Imagem: </Styled.HomeLabel>
                        <Styled.Input
                            type='text'
                            placeholder='Insira o endereço da imagem'
                            id='img'
                            onChange={(e) => setImg(e.target.value)}
                            required
                            value={img}
                        />
                    </Styled.InputBox>
                    <Styled.InputBox>
                        <Styled.HomeLabel htmlFor='description' >Descrição:</Styled.HomeLabel>
                        <Styled.Input
                            type='text'
                            placeholder='Descreva seu post'
                            id='description'
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            value={alt_description}
                        />
                    </Styled.InputBox>
                    <Styled.Button>Criar Post <RxOpenInNewWindow /> </Styled.Button>
                </Styled.CreatePost>
            }
            {loading && <p>Carregando...</p>}
            <Styled.CardContainer>
                {user.posts && user.posts.map((post) => (
                    <CardPostUser dado={post} key={post.id} />
                ))}
                {dados.map((dado) =>
                    <Card dado={dado} key={dado.id} />
                )}

            </Styled.CardContainer>
            <Styled.ButtonArrows onClick={handleLessPage} > <FaArrowLeft /> </Styled.ButtonArrows>
            <Styled.ButtonArrows onClick={handleMorePage}  > <FaArrowRight /> </Styled.ButtonArrows>
        </Styled.Div>
    )
}

export default Home