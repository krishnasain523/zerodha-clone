import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Inputform({ setpopup }) {
    return (<>
        <div className='p-10'>
            <form action="" className='mt-40 p-5  flex flex-col gap-8 border border-[#e1e1e1]' >
                <div className='flex gap-2'>
                    <TextField
                        required
                        id="outlined-required"
                        label="quantity"

                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="price"
                    />
                </div>
                <div className='flex gap-5'>
                    <Button variant="contained">Buy</Button>
                    <Button variant="contained" onClick={() => setpopup(false)}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>

    </>)
}