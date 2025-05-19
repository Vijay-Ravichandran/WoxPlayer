import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';
import {
  CContainer,
  CRow,
  CCol,
  CCardGroup,
  CCard,
  CCardBody,
  CForm,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CButton
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilUser, cilLockLocked } from '@coreui/icons';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) navigate('/dashboard');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#1f2227' }}>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCard className="p-4" style={{ backgroundColor: '#1f2227', color: '#fff', borderRadius: '10px', border: '1px solid #2a2a2a' }}>
              <CCardBody>
                <h2 className="text-center mb-4" style={{ color: '#fff' }}>Login</h2>
                {error && <p className="text-danger">{error}</p>}
                {loading && <p className="text-info">Loading...</p>}

                <CForm onSubmit={submitHandler}>
                  <CInputGroup className="mb-3">
                    <CInputGroupText style={{ backgroundColor: '#2a2a2a', border: 'none', color: '#fff' }}>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      type="email"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        backgroundColor: '#ffffff',
                        color: '#fff',
                        border: 'none'
                      }}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CInputGroupText style={{ backgroundColor: '#2a2a2a', border: 'none', color: '#fff' }}>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Enter your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        backgroundColor: '#ffffff',
                        color: '#fff',
                        border: 'none'
                      }}
                    />
                  </CInputGroup>

                  <CRow>
                    <CCol xs={6}>
                      <CButton
                        type="submit"
                        className="px-4"
                        style={{ backgroundColor: '#ffffff', color: '#000', border: 'none' }}
                      >
                        Login
                      </CButton>    
                    </CCol>
                    <CCol xs={6} className="text-end">
                      <a href="#" style={{ color: '#ffffff', fontSize: '0.9rem' }}>
                        Forgot password?
                      </a>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default LoginForm;
