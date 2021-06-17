.portfolio-page{
    min-height: 100vh;
    background-color:white;
}
.portfolios{
    width: 80%;
    margin: 10vh auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 7rem;
    height: 100%;
}

.portfolio{

    display: grid;
    width: auto;
    row-gap: 1rem;


    &__image{
        width: 100%;
    }

    .header-tertiary{
        justify-self: flex-start;
        text-align: left;
    }

    .categories{
        color: $color-grey-dark;
        font-size: 1.5rem;
    }

    &__link{
        &:link,
        &:visited{
            display: inline-block;
            justify-self: flex-start;
            text-decoration: none;
            border-bottom: 2px solid $color-primary-dark;
            cursor: pointer;
            font-size: 2rem;
            padding: 1rem 1.7rem;
            padding-left: 10px;
            text-transform: uppercase;
            color:  $color-primary-dark;
            font-weight: bolder;
            justify-content: center;
            text-decoration: none;
            transition: all .5s;
            
            &:hover{
                background-color:  $color-primary-dark;
                color: white;
            }

        }
        
    }




}


///
.portfolio-page{
    min-height: 100vh;
    background-color: rgb(197, 197, 197);
}

.portfolio{
    width: 100%;
    display: grid;
    background-color: white;
    height: 100vh;
    grid-template-columns: 30% 70%;
    grid-template-rows: 1fr;

    @include responsive(phone) {
        display: unset;
        grid-template-rows: 30% 70%;
        grid-template-columns: 1fr;

    }

    @include responsive(tab-port) {
        display: unset;
        grid-template-rows: 30% 70%;
        grid-template-columns: 1fr;

    }

    &__card-list{
        display: grid;
        margin: 0 auto;
        width: 60%;
        grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
        column-gap: 5%;
        row-gap: 3rem;

        @include responsive(phone) {
            width: 90%;
        }

        @include responsive(tab-port) {
            width: 90%;
        }
            
    }

    
    &__nav{
        border-bottom: 3px solid black;
        margin-top: 4rem;

        @include responsive(phone) {
            border-bottom: 3px solid $color-primary;
        }

        @include responsive(tab-port) {
            border-bottom: 3px solid $color-primary;

        }


    }

    &__list{
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    
    &__link{
        &,
        &:link{
            color: black;
            background-color: white;
            display: block;
            padding: 2rem 3rem;
            font-size: 2rem;
            text-decoration: none;
            font-family: 'Alegreya Sans SC';

        }

        &:hover{
            color: $color-primary-dark;
            background-color: rgb(207, 207, 207);
        }

    }

    &__item {
        list-style: none;
        background-color: $color-primary-dark;

        
        &:nth-child(2) {
            border-left: 1px solid black;
        }

        .active {
            color: white;
            background-color: black;

        }
    }
}

.portfolio-list{
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

    @include responsive(phone){
        background-color: white;
        width: unset;
        height: 12vh;
        display: flex;
        flex-direction: row;

    }

    @include responsive(tab-port) {
        background-color: white;
        width: unset;
        height: 10vh;
        display: flex;
        flex-direction: row;

    }


    &__item{
        height: 30%;
        display: inherit;
        flex-direction: inherit;
        align-items: center;
        width: 100%;
        border-bottom: 2px solid black;
        padding: 3rem 1rem;
        text-decoration: none;

        @include responsive(phone){
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 100%;
            border-bottom: 2px solid $color-primary;
            text-align: center;
            padding: 0;
        }

        @include responsive(tab-port) {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 100%;
            text-align: center;
            padding: 0;
        }

        &:hover{
            background-color: rgb(145, 145, 145);
        }
    }

    &__icon{
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        background-color: $color-primary-dark;
        display: flex;
        background-size: cover;
        justify-content: center;
        align-items: center;
        background-blend-mode: luminosity;

        @include responsive(phone){
            width: 5rem;
            height: 5rem;
        }

        @include responsive(tab-port) {
            width: 5rem;
            height: 5rem;
        }
    }

    &__logo{
        width: 7rem;
        border-radius: 50%;
        height: 7rem;
        background-color: black;
        background-blend-mode: lighten;

        @include responsive(phone) {
            width: 5rem;
            height: 5rem;
        }

        @include responsive(tab-port) {
            width: 5rem;
            height: 5rem;
        }
    }

    &__title{
        color: black;
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;

        @include responsive(phone){
            font-size: 1.1rem;
        }

        @include responsive(tab-port) {
            font-size: 1.4rem;
        }
    }

    .selected{
        background-color:black;
        
        @include responsive(phone) {
            background-color:$color-primary;

        }

        @include responsive(tab-port) {
            background-color:$color-primary;

        }

         .portfolio-list__title {
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
            text-decoration: none;

            @include responsive(phone) {
                font-size: 1.1rem;
                color: black;
            }

            @include responsive(tab-port) {
                font-size: 1.1rem;
                color: black;
            }
        }
    }
}

.portfolio-detail{
    height: 100vh;
    display: grid;
    grid-template-rows: 50% ;
    grid-template-columns: 100%;
    color: white;

    @include responsive(phone){
        display: flex;
        height: 80vh;
        flex-direction: column;
    }

    // @include responsive(tab-port) {
    //     display: flex;
    //     height: 80vh;
    //     flex-direction: column;
    // }





    &__slide{
        position: relative;
        width: 100%;
        height: 100%;

        @include responsive(phone){
            display: unset;
            height: 40vh;
            width: 100%;
        }

        @include responsive(tab-port) {
            display: unset;
            width: 100%;
        }

        .header-tertiary{
            position: absolute;
            padding: 2rem;
            bottom: 0;
            font-size: 3rem;
            background-color: $color-primary-dark;
            color: white;

            @include responsive(phone) {
                display: none;
            }

            @include responsive(tab-port) {
                display: none;
            }

            
        }
    

    }

    &__information {
        width: 100%;
        margin: 0 auto;
        position: relative;
        background-color: black;
        text-align: justify;
        padding: 3rem;


        @include responsive(phone){
            display: flex;
            align-items: center;
            flex-direction: column;
            height: 50vh;
            background-color: black;
        }



        .paragraph{
            font-size: 1.5rem;

            @include responsive(phone){
                font-size: 1.4rem;
                padding: 0 2rem;
            }
        }

        .program{

            &__list{
            display: flex;
            flex-wrap: wrap;
            }

            &__item{
                background-color: gray;
                font-size: 1.6rem;
                margin: 1rem .5rem;
                padding: 1rem 2rem;
                border-radius: 10px;

                @include responsive(phone){
                    font-size: 1.4rem;
                    padding: .5rem 1rem;

                }
            }
        }
    }
}

.mobile{
    grid-template-rows: 100vh;
    grid-template-columns: 40% 60%;

        .header-tertiary {
            position: relative;
            padding: 3rem 0;
            font-size: 4rem;
            background-color: transparent;
            color: white;
            text-transform: uppercase;

            @include responsive(phone) {
                display: none;
                font-size: 2rem;
                padding: 2rem;
            }

            @include responsive(tab-port){
                font-size: 2rem;
                padding: 2rem;
                text-align: center;
                background-color: black;
            }

        }

        .portfolio-detail__information {
            width: 100%;
            text-align: justify;
            margin: 0 auto;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            @include responsive(phone) {
                margin: 0 auto;
                height: 50vh;

            }
        
                
        }

        .button-container{
            display: flex;
            justify-content: center;

            
        }
}

.portfolio-slide-image {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 100vh;
    background-color: black;
    background-repeat: no-repeat;
    background-blend-mode: luminosity;
    background-position: top left;

    @include responsive(phone) {
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 40vh;
        background-size: 100% 140%;

    }

     @include responsive(tab-port) {
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 100%;
        background-size: 100% 100%;
    }

}

.image-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.589);
    background-repeat: no-repeat;
    background-blend-mode: luminosity;
    background-size: cover;
    height: 100vh;
    background-position: top left;
    height: 100vh;
    filter: blur(2vw);
    will-change: transform, opacity;
    animation: reveal 1s ease-out infinite;

     @include responsive(phone) {
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 40vh;
        background-size: 100% 140%;

    }

     @include responsive(tab-port) {
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 100%;
        background-size: 100% 100%;
    }

}