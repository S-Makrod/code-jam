import Button from '@mui/material/Button';

interface Props {
    text: string;
    id: number;
    onClick: (id: number) => null;
}

const Option = (props: Props) => {

    const {text, id, onClick} = props

    return (
        <Button onClick={() => onClick(id)}>{text}</Button>
    )
}

export default Option