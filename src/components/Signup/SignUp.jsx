import React, { useRef, useState } from 'react'
import * as S from './SignUp.style'
import { IconExit } from '../../assets/images'
import { CreateUser, AddUserData } from '../../firebase'
import { useDuplicateID } from '../../hooks/useDuplicateID'
import useToastMessage from '../../hooks/useToastMessage'
import { ToastContainer, useToast } from 'react-toastify'

const RegexID = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
const RegexPW = /^(?=.*[a-zA-Z\d])[a-zA-Z\d]{8,}$/
const RegexPhoneNumber = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/

const ModalSignUp = (props) => {
  const { open, set, showModalFunc } = props
  const RefDuplicate = useRef(null)
  const [values, setValues] = useState({
    EMAIL: '',
    PW: '',
    CONFIRMPW: '',
    NAME: '',
    PHONENUMBER: '',
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
    if (e.target.name === 'EMAIL') {
      RefDuplicate.current.style.backgroundColor = 'red'
      RefDuplicate.current.innerText = '중복확인'
    }

    const spanId = `span_${e.target.name}`
    const spanEl = document.querySelector(`#${spanId}`)

    switch (spanId) {
      case 'span_EMAIL':
        spanEl.style.display = RegexID.test(e.target.value) ? 'none' : 'block'
        break
      case 'span_PW':
        spanEl.style.display = RegexPW.test(e.target.value) ? 'none' : 'block'
        break
      case 'span_CONFIRMPW':
        spanEl.style.display = values.PW === e.target.value ? 'none' : 'block'
        break
      case 'span_NAME':
        spanEl.style.display = e.target.value.length >= 3 ? 'none' : 'block'
        break
      case 'span_PHONENUMBER':
        spanEl.style.display = RegexPhoneNumber.test(e.target.value) ? 'none' : 'block'
        break
    }
  }

  const handleConfirm = async () => {
    if (values.EMAIL === '') {
      alert('유효한 아이디를 입력해주세요')
      return
    }
    const duplicate = await useDuplicateID(values.EMAIL)
    if (duplicate) {
      RefDuplicate.current.style.backgroundColor = 'red'
      alert('중복된 아이디가 있습니다.')
      useToastMessage('중복된 아이디가 있습니다.')
    } else {
      RefDuplicate.current.style.backgroundColor = 'blue'
      RefDuplicate.current.innerText = '확인완료'
    }
  }

  const emptyCheck = () => {
    return Object.values(values)
      .flat()
      .some((value) => value === '')
  }

  const signUp = async (e) => {
    e.preventDefault()

    const formEl = document.querySelector('#SignupForm')
    const spanEls = formEl.querySelectorAll('span')
    const bSignup = Array.from(spanEls).some((el) => el.style.display !== 'none')
    const isEmpty = emptyCheck()
    const bDuplicate = RefDuplicate.current.innerText !== '확인완료'

    if ((bSignup || isEmpty || bDuplicate) === true) {
      if (bSignup || isEmpty) {
        alert('양식에 맞게 작성해주세요')
      } else if (bDuplicate) {
        alert('아이디 중복확인을 해주세요')
      }
      return
    }
    await CreateUser(values.EMAIL, values.PW)
      .then(async (result) => {
        await AddUserData(result.uid, values.EMAIL, values.NAME, values.PHONENUMBER)
        showModalFunc(false)
        set(false)
      })
      .catch((err) => {
        alert(err)
      })
      .finally(() => {
        useToastMessage(`${values.NAME}님 환영합니다.`)
        const inputEl = e.target.querySelectorAll('input')
        Array.from(inputEl).forEach((el) => (el.value = ''))
      })
    console.log('완료')
  }

  return (
    <S.Conatiner open={open}>
      <S.SignUpContainer>
        <S.TitleContainer height={70}>
          <S.BtnCloseModal
            onClick={() => {
              set(false)
            }}
          >
            <IconExit />
          </S.BtnCloseModal>
          <h2>회원 가입</h2>
        </S.TitleContainer>
        <S.ContentContainer>
          <S.TextContainer>
            <S.SignUpForm id="SignupForm" onSubmit={signUp} onChange={handleChange}>
              <S.InputContainer upper={true}>
                <S.ParagraphDiv>
                  <p>아이디</p>
                  <S.SpanSignupConfirm id="span_EMAIL">
                    이메일 양식에 맞춰주세요
                  </S.SpanSignupConfirm>
                  <div className="Confirm--Email">
                    <button type="button" onClick={handleConfirm} ref={RefDuplicate}>
                      중복확인
                    </button>
                  </div>
                </S.ParagraphDiv>
                <S.InputIDPW name="EMAIL" autoComplete="off" />
              </S.InputContainer>
              <S.InputContainer>
                <S.ParagraphDiv>
                  <p>비밀번호</p>
                  <S.SpanSignupConfirm id="span_PW">비밀번호 양식에 맞춰주세요</S.SpanSignupConfirm>
                </S.ParagraphDiv>
                <S.InputIDPW type={'password'} name="PW" autoComplete="off" />
              </S.InputContainer>
              <S.InputContainer>
                <S.ParagraphDiv>
                  <p>비밀번호 확인</p>
                  <S.SpanSignupConfirm id="span_CONFIRMPW">
                    비밀번호가 일치하지 않습니다
                  </S.SpanSignupConfirm>
                </S.ParagraphDiv>
                <S.InputIDPW type={'password'} name="CONFIRMPW" autoComplete="off" />
              </S.InputContainer>
              <S.InputContainer>
                <S.ParagraphDiv>
                  <p>이름</p>
                  <S.SpanSignupConfirm id="span_NAME">3글자 이상 입력해주세요</S.SpanSignupConfirm>
                </S.ParagraphDiv>
                <S.InputIDPW name="NAME" autoComplete="off" />
              </S.InputContainer>
              <S.InputContainer lower={true}>
                <S.ParagraphDiv>
                  <p>전화번호</p>
                  <S.SpanSignupConfirm id="span_PHONENUMBER">
                    전화번호 형식에 맞춰 입력해주세요
                  </S.SpanSignupConfirm>
                </S.ParagraphDiv>
                <S.InputIDPW type={'number'} name="PHONENUMBER" autoComplete="off" />
              </S.InputContainer>
              <S.TextContainer>
                <S.BtnSubmit type="submit">회원가입</S.BtnSubmit>
              </S.TextContainer>
            </S.SignUpForm>
          </S.TextContainer>
        </S.ContentContainer>
      </S.SignUpContainer>
      <ToastContainer />
    </S.Conatiner>
  )
}

export default ModalSignUp
