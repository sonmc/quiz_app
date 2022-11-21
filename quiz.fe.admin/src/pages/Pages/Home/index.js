import React from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Table, CardHeader } from 'reactstrap';
import MetaTags from 'react-meta-tags';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import UiContent from '../../../Components/Common/UiContent';
import { Link } from 'react-router-dom';
import { DefaultTables, StrippedRow } from './BasicTablesCode';

const Home = () => {
    return (
        <React.Fragment>
            <UiContent />
            <div className="page-content">
                <MetaTags>
                    <title>Basic Tables | Velzon - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    <BreadCrumb title="Basic Tables" pageTitle="Tables" />
                    <Row>
                        <Col xl={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0 flex-grow-1">Default Tables</h4>
                                </CardHeader>

                                <CardBody>
                                    <p className="text-muted">
                                        Use <code>Table</code> attribute to show bootstrap-based default table.
                                    </p>
                                    <div className="table-responsive">
                                        <Table className="align-middle table-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Customer</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Invoice</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <Link to="#" className="fw-medium">
                                                            #VZ2110
                                                        </Link>
                                                    </th>
                                                    <td>Bobby Davis</td>
                                                    <td>October 15, 2021</td>
                                                    <td>$2,300</td>
                                                    <td>
                                                        <Link to="#" className="link-success">
                                                            View More <i className="ri-arrow-right-line align-middle"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <Link to="#" className="fw-medium">
                                                            #VZ2109
                                                        </Link>
                                                    </th>
                                                    <td>Christopher Neal</td>
                                                    <td>October 7, 2021</td>
                                                    <td>$5,500</td>
                                                    <td>
                                                        <Link to="#" className="link-success">
                                                            View More <i className="ri-arrow-right-line align-middle"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <Link to="#" className="fw-medium">
                                                            #VZ2108
                                                        </Link>
                                                    </th>
                                                    <td>Monkey Karry</td>
                                                    <td>October 5, 2021</td>
                                                    <td>$2,420</td>
                                                    <td>
                                                        <Link to="#" className="link-success">
                                                            View More <i className="ri-arrow-right-line align-middle"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <Link to="#" className="fw-medium">
                                                            #VZ2107
                                                        </Link>
                                                    </th>
                                                    <td>James White</td>
                                                    <td>October 2, 2021</td>
                                                    <td>$7,452</td>
                                                    <td>
                                                        <Link to="#" className="link-success">
                                                            View More <i className="ri-arrow-right-line align-middle"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={12}>
                            <Card>
                                <PreviewCardHeader title="Striped Rows" />
                                <CardBody>
                                    <p className="text-muted">
                                        Use <code>table-striped</code> class to add zebra-striping to any table row within the &lt;tbody&gt;.
                                    </p>
                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="table-striped table-nowrap align-middle mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Customer</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Invoice</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="fw-medium">01</td>
                                                        <td>Bobby Davis</td>
                                                        <td>Nov 14, 2021</td>
                                                        <td>$2,410</td>
                                                        <td>
                                                            <span className="badge bg-success">Confirmed</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">02</td>
                                                        <td>Christopher Neal</td>
                                                        <td>Nov 21, 2021</td>
                                                        <td>$1,450</td>
                                                        <td>
                                                            <span className="badge bg-warning">Waiting</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">03</td>
                                                        <td>Monkey Karry</td>
                                                        <td>Nov 24, 2021</td>
                                                        <td>$3,500</td>
                                                        <td>
                                                            <span className="badge bg-success">Confirmed</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">04</td>
                                                        <td>Aaron James</td>
                                                        <td>Nov 25, 2021</td>
                                                        <td>$6,875</td>
                                                        <td>
                                                            <span className="badge bg-danger">Cancelled</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ height: '275px' }}>
                                            <code>
                                                <StrippedRow />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Home;
