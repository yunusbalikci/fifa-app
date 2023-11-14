import pic1 from '../images/pic1.png'
export default function Carousel(){
    return(
        <div>
            <section class="h-full w-full bg-fifa-blue py-4">
                <img src={pic1} alt="" class="w-1/2 mx-auto"/>
                    <div class="container">
                        <h1 class="text-fifa-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quam debitis dolorum iste alias atque sint similique, a ad aliquam. Voluptates labore dolore voluptate nesciunt? Cum magnam doloremque maiores iusto.</h1>
                    </div>
            </section>
        </div>
    )
}