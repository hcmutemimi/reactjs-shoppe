import React from 'react'
import * as S from './headerRegister.style'

export default function HeaderRegister() {
    return (
        <div>
            <S.Header>
                <S.Container className="container">
                    <S.HeadaerBrand>
                        <S.HeaderIcon to=''>
                            Logo
                        </S.HeaderIcon>
                        <S.HeaderTitle>{title}</S.HeaderTitle>
                    </S.HeadaerBrand>
                    <Link to="" className="link">Cần trợ giúp</Link>
                </S.Container>
            </S.Header>
        </div>
    )
}
