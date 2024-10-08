import React from 'react';

export const BillingPage = () => {
    return (
        <div>
             <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
					
					<div className="app-main flex-column flex-row-fluid" id="kt_app_main">
						
						<div className="d-flex flex-column flex-column-fluid">
						
							<div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
								
								<div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
									
									<div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
									
										<h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">My Billing </h1>
									
										<ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
											
											<li className="breadcrumb-item text-muted">
												<a href="index.html" className="text-muted text-hover-primary">Home</a>
											</li>
											
											<li className="breadcrumb-item">
												<span className="bullet bg-gray-400 w-5px h-2px"></span>
											</li>
											
											<li className="breadcrumb-item text-muted">Billing Statement</li>
											
										</ul>
										
									</div>
									<div className="d-flex align-items-center gap-2 gap-lg-3">
									
										<div className="m-0">
											
											<a href="#" className="btn btn-sm btn-flex bg-body btn-color-gray-700 btn-active-color-primary fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
											
											<span className="svg-icon svg-icon-6 svg-icon-muted me-1">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor" />
												</svg>
											</span>
											Select Filter</a>
											<div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_62cfa2e304dd3">
											
												<div className="px-7 py-5">
													<div className="fs-5 text-dark fw-bold">Select Filter Options</div>
												</div>
												<div className="separator border-gray-200"></div>
												<div className="px-7 py-5">
													
													<div className="mb-10">
													
														<label className="form-label fw-semibold">Select Year</label>
														
														<div>
															<select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_62cfa2e304dd3" data-allow-clear="true">
																<option></option>
                                                                <option value="0">All</option>
																<option value="1"> 2023 </option>
																<option value="2"> 2024 </option>
																<option value="2"> 2025 </option>
																
															</select>
														</div>
													
													</div>
													
													<div className="mb-10">
														
														<label className="form-label fw-semibold">Select Month</label>
														
														<div>
															<select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_62cfa2e304dd3" data-allow-clear="true">
																<option></option>
                                                                <option value="0">All</option>
																<option value="1"> Jan </option>
																<option value="2"> Febuary </option>
																<option value="2"> March </option>
                                                                <option value="2"> Aprial </option>
                                                                <option value="2"> May </option>
                                                                <option value="2"> JUne </option>   
                                                                <option value="2"> July </option> 
                                                                <option value="2"> August </option>  
                                                                <option value="2"> Sepectmber </option>   
                                                                <option value="2"> Octobor </option>
                                                                <option value="2"> November </option>
                                                                <option value="2"> December </option>


																
															</select>
														</div>
														
													</div>
													
													<div className="mb-10">
													
														<label className="form-label fw-semibold">Select Status</label>
														
														<div>
															<select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_62cfa2e304dd3" data-allow-clear="true">
																<option value="1">All</option>
                                                                <option value="2">Processing</option>
                                                                <option value="3">Failed</option>
																<option value="4">Success</option>
															</select>
														</div>
														
													</div>
													
													<div className="d-flex justify-content-end">
														<button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
													</div>
													
												</div>
												
											</div>
											
										</div>
										
									
									</div>
									
									
								</div>
								
							</div>

                            	<div id="kt_app_content_container" className="app-container container-xxl">
									
									<div className="card">
										
										<div className="card-header border-0 pt-6">
										
											<div className="card-title">
											
												<div className="d-flex align-items-center position-relative my-1">
													
													<span className="svg-icon svg-icon-1 position-absolute ms-6">
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
															<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
														</svg>
													</span>
												
													<input type="text" data-kt-customer-table-filter="search" className="form-control form-control-solid w-250px ps-15" placeholder="Search Customers" />
												</div>
												
											</div>
											
										</div>
										<div className="card-body p-0">
											
											<div className="table-responsive">
												
												<table className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">
													
                                                    
                                                    
													<thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
															   
                                                                <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                                                <th className="min-w-125px"> Date</th>
                                                                    <th className="min-w-125px">    Media</th>
                                                                    <th className="min-w-125px">Mrp</th>
                                                                    <th className="min-w-125px">Voucher</th>
                                                                    <th className="min-w-125px"> Payment Status</th>
                                                                   <th className="min-w-125px">Order Status </th>
                                                                </tr>
													</thead>
													<tbody className="fw-6 fw-semibold text-gray-600">
												        <tr>
                                                                       
                                                                        <td>
																		<div className="d-flex flex-column">
																		<span className="fw-bold">Nov 01, 2020 ,7:25 AM</span>
																		<a href="../../demo1/dist/GOWISH/11.INVOICES/Order Details_Invoice.html" className="text-gray-600 text-hover-primary fw-bold">OIDU 000001</a>
                                                                            </div>
                                                                        </td>
																		
																		<td>
																		<div className="d-flex flex-column">
																			<div className="d-flex align-items-center">
																				
                                                                                
                                                                               
                                                                        <span className="symbol symbol-40px"> <span className="symbol-label" style={{backgroundImage:"url('assets/media/images/Half Saree 09.jpeg')"}}></span>  </span>    
                                                                                
                                                                                
                                                                          
																				
																				
																				<div className="d-flex flex-column">
																					<div className="ms-2">
																					
																					<span className="fw-bold">WEDINV00002</span>
																						
																					</div>
																				
																					<div className="btn-chips ms-2">
                                                                       <span className="badge badge-light my-2">Vertical</span>
                                                                             <span className="badge badge-light my-2">Hindus</span>
                                                                             <span className="badge badge-light my-2">Standred</span>
                                                                        </div>
																				</div>
																			</div>
																			</div>
																		</td>
																		
																		
																		<td>
																		<div className="d-flex flex-column">
																			<div className="d-flex align-items-center">
																				<div className="d-flex flex-column">
																				<div className="ms-2">
																					
																					<span className="fw-bold">$ 450.00</span>
																				
																				</div>
																				<div className="ms-2"><s>$ 500.00</s> 10 % off  
																				</div>
																			</div>
																			
																			</div>
																		</div>
																	</td>
                                                            
                                                            	<td>
																		<div className="d-flex flex-column">
																			<div className="d-flex align-items-center">
																				<div className="d-flex flex-column">
																				<div className="ms-2">
																					
																					<span className="fw-bold">$ 45.00</span>
																				
																				</div>
																				<div className="ms-2">
                                                                                    <span className="badge badge-light my-2">User Voucher - 10 % </span>
																				</div>
																			</div>
																			
																			</div>
																		</div>
																	</td>
                                                                                <td>
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="d-flex align-items-center">
                                                                                        <div className="d-flex flex-column">
                                                                                        <div className="ms-2">
                                                                                       
                                                                                        <span className="fw-bold">$ 405.00</span>
                                                                                      
                                                                                        </div>
                                                                                        <div className="ms-2">
                                                                                            <span className="badge badge-light-success fw-bolder">Success</span>
                                                                                        </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>	
																
																		
															
                                                            <td>
															
													
                                                                    <span className="badge badge-light-primary fw-bolder">Processing</span>															
																</td>
																		
																			
														</tr>
                                                         <tr>
                                                                        <td>
																		<div className="d-flex flex-column">
																		<span className="fw-bold">Nov 01, 2020 ,7:25 AM</span>
																		<a href="../../demo1/dist/GOWISH/11.INVOICES/Order Details_Invoice.html" className="text-gray-600 text-hover-primary fw-bold">OIDU 000001</a>
                                                                            </div>
                                                                        </td>
																	
																		<td>
																		<div className="d-flex flex-column">
																			<div className="d-flex align-items-center">
																				
																			  <span className="symbol symbol-40px"> <span className="symbol-label" style={{backgroundImage:"url('assets/media/images/Half Saree 08.jpeg')"}}></span>  </span>  
																				
																				
																				
																				<div className="d-flex flex-column">
																					<div className="ms-2">
																				
																					<span className="fw-bold">WEDINV00002</span>
																						
																					</div>
																				
																					<div className="btn-chips ms-2">
                                                                       <span className="badge badge-light my-2">Vertical</span>
                                                                             <span className="badge badge-light my-2">Hindus</span>
                                                                             <span className="badge badge-light my-2">Standred</span>
                                                                        </div>
																				</div>
																			</div>
																			</div>
																		</td>
																		
																		
																		<td>
																		<div className="d-flex flex-column">
																			<div className="d-flex align-items-center">
																				<div className="d-flex flex-column">
																				<div className="ms-2">
																				
																					<span className="fw-bold">$ 450.00</span>
																				
																				</div>
																				<div className="ms-2"><s>$ 500.00</s> 10 % off  
																				</div>
																			</div>
																			
																			</div>
																		</div>
																	</td>
                                                            
                                                            	<td>
																		<div className="d-flex flex-column">
																			<div className="d-flex align-items-center">
																				<div className="d-flex flex-column">
																				<div className="ms-2">
																					
																					<span className="fw-bold">$ 45.00</span>
																					
																				</div>
																				<div className="ms-2">
                                                                                    <span className="badge badge-light my-2">User Voucher - 10 % </span>
																				</div>
																			</div>
																			
																			</div>
																		</div>
																	</td>
                                                                                <td>
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="d-flex align-items-center">
                                                                                        <div className="d-flex flex-column">
                                                                                        <div className="ms-2">
                                                                                        
                                                                                        <span className="fw-bold">$ 405.00</span>
                                                                                       
                                                                                        </div>
                                                                                        <div className="ms-2">
                                                                                            <span className="badge badge-light-success fw-bolder">Success</span>
                                                                                        </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>	
																
																		
															
                                                            <td>
															
													
                                                                    <span className="badge badge-light-danger fw-bolder">Failed</span>													
																</td>
																		
																			
														</tr>
                                                         <tr>
                                                                 
                                                                        <td>
																		<div className="d-flex flex-column">
																		<span className="fw-bold">Nov 01, 2020 ,7:25 AM</span>
																		<a href="../../demo1/dist/GOWISH/11.INVOICES/Order Details_Invoice.html" className="text-gray-600 text-hover-primary fw-bold">OIDU 000001</a>
                                                                            </div>
                                                                        </td>
																		
																		<td>
																		<div className="d-flex flex-column">
																			<div className="d-flex align-items-center">
																				
																				  <span className="symbol symbol-40px"> <span className="symbol-label" style={{backgroundImage:"url('assets/media/images/Half Saree 06.jpeg')"}}></span>  </span>  
																				
																				<div className="d-flex flex-column">
																					<div className="ms-2">
																					<span className="fw-bold">WEDINV00002</span>
																						
																					</div>
																				
																					<div className="btn-chips ms-2">
                                                                       <span className="badge badge-light my-2">Vertical</span>
                                                                             <span className="badge badge-light my-2">Hindus</span>
                                                                             <span className="badge badge-light my-2">Standred</span>
                                                                        </div>
																				</div>
																			</div>
																			</div>
																		</td>
																		
																		
																		<td>
																		<div className="d-flex flex-column">
																			<div className="d-flex align-items-center">
																				<div className="d-flex flex-column">
																				<div className="ms-2">
																				
																					<span className="fw-bold">$ 450.00</span>
																					
																				</div>
																				<div className="ms-2"><s>$ 500.00</s> 10 % off  
																				</div>
																			</div>
																			
																			</div>
																		</div>
																	</td>
                                                            
                                                            	<td>
																		<div className="d-flex flex-column">
																			<div className="d-flex align-items-center">
																				<div className="d-flex flex-column">
																				<div className="ms-2">
																					
																					<span className="fw-bold">$ 45.00</span>
																					
																				</div>
																				<div className="ms-2">
                                                                                    <span className="badge badge-light my-2">User Voucher - 10 % </span>
																				</div>
																			</div>
																			
																			</div>
																		</div>
																	</td>
                                                                                <td>
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="d-flex align-items-center">
                                                                                        <div className="d-flex flex-column">
                                                                                        <div className="ms-2">
                                                                                        
                                                                                        <span className="fw-bold">$ 405.00</span>
                                                                                       
                                                                                        </div>
                                                                                        <div className="ms-2">
                                                                                            <span className="badge badge-light-danger fw-bolder">Failed</span>                                                                                        </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>	
																
																		
															
                                                            <td>
															
													
                                                                    <span className="badge badge-light-danger fw-bolder">Failed</span>													
																</td>
																		
																			
														</tr>
                                                         <tr>
                                                                        <td>
																		<div className="d-flex flex-column">
																		<span className="fw-bold">Nov 01, 2020 ,7:25 AM</span>
																		<a href="../../demo1/dist/GOWISH/11.INVOICES/Order Details_Invoice.html" className="text-gray-600 text-hover-primary fw-bold">OIDU 000001</a>
                                                                            </div>
                                                                        </td>
																		<td>
																		<div className="d-flex flex-column">
																			<div className="d-flex align-items-center">
																			  <span className="symbol symbol-40px"> <span className="symbol-label" style={{backgroundImage:"url('assets/media/images/Half Saree 05.jpeg')"}}></span>  </span>  
																				
																				
																				<div className="d-flex flex-column">
																					<div className="ms-2">
																					<span className="fw-bold">WEDINV00002</span>
																					</div>
																				
																					<div className="btn-chips ms-2">
                                                                       <span className="badge badge-light my-2">Vertical</span>
                                                                             <span className="badge badge-light my-2">Hindus</span>
                                                                             <span className="badge badge-light my-2">Standred</span>
                                                                        </div>
																				</div>
																			</div>
																			</div>
																		</td>
																		
																		
																		<td>
																		<div className="d-flex flex-column">
																			<div className="d-flex align-items-center">
																				<div className="d-flex flex-column">
																				<div className="ms-2">
																					
																					<span className="fw-bold">$ 450.00</span>
																					
																				</div>
																				<div className="ms-2"><s>$ 500.00</s> 10 % off  
																				</div>
																			</div>
																			
																			</div>
																		</div>
																	</td>
                                                            
                                                            	<td>
																		<div className="d-flex flex-column">
																			<div className="d-flex align-items-center">
																				<div className="d-flex flex-column">
																				<div className="ms-2">
																					
																					<span className="fw-bold">$ 45.00</span>
																					
																				</div>
																				<div className="ms-2">
                                                                                    <span className="badge badge-light my-2">User Voucher - 10 % </span>
																				</div>
																			</div>
																			
																			</div>
																		</div>
																	</td>
                                                                                <td>
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="d-flex align-items-center">
                                                                                        <div className="d-flex flex-column">
                                                                                        <div className="ms-2">
                                                                                       
                                                                                        <span className="fw-bold">$ 405.00</span>
                                                                                       
                                                                                        </div>
                                                                                        <div className="ms-2">
                                                                                       <span className="badge badge-light-success fw-bolder">Success</span>                                                                                       </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>	
																
																		
															
                                                            <td>
															
													
                                                                  <span className="badge badge-light-success fw-bolder">Success</span>													
																</td>
																		
																			
														</tr>
													
                                                        
                                                    
                                                        
                                                        
                                                      
													</tbody>
												</table>
											</div>
										</div>
									</div>
									{/* <div className="modal fade" id="kt_customers_export_modal" aria-hidden="true">
										<div className="modal-dialog modal-dialog-centered mw-650px">
											<div className="modal-content">
												<div className="modal-header">
													<h2 className="fw-bold">Export Customers</h2>
													<div id="kt_customers_export_close" className="btn btn-icon btn-sm btn-active-icon-primary">
														
														<span className="svg-icon svg-icon-1">
															<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
																<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
															</svg>
														</span>
													</div>
												</div>
												<div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
													<form id="kt_customers_export_form" className="form" action="#">
														<div className="fv-row mb-10">
															<label className="fs-5 fw-semibold form-label mb-5">Select Export Format:</label>

															<select data-control="select2" data-placeholder="Select a format" data-hide-search="true" name="format" className="form-select form-select-solid">
																<option value="excell">Excel</option>
																<option value="pdf">PDF</option>
																<option value="cvs">CVS</option>
																<option value="zip">ZIP</option>
															</select>
														</div>
														<div className="fv-row mb-10">
															<label className="fs-5 fw-semibold form-label mb-5">Select Date Range:</label>
															
															<input className="form-control form-control-solid" placeholder="Pick a date" name="date" />
															
														</div>
														<div className="row fv-row mb-15">
															<label className="fs-5 fw-semibold form-label mb-5">Payment Type:</label>
															<div className="d-flex flex-column">
																<label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
																	<input className="form-check-input" type="checkbox" value="1" checked="checked" name="payment_type" />
																	<span className="form-check-label text-gray-600 fw-semibold">All</span>
																</label>
																<label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
																	<input className="form-check-input" type="checkbox" value="2" checked="checked" name="payment_type" />
																	<span className="form-check-label text-gray-600 fw-semibold">Visa</span>
																</label>
																<label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
																	<input className="form-check-input" type="checkbox" value="3" name="payment_type" />
																	<span className="form-check-label text-gray-600 fw-semibold">Mastercard</span>
																</label>
																<label className="form-check form-check-custom form-check-sm form-check-solid">
																	<input className="form-check-input" type="checkbox" value="4" name="payment_type" />
																	<span className="form-check-label text-gray-600 fw-semibold">American Express</span>
																</label>
															</div>
														</div>
														<div className="text-center">
															<button type="reset" id="kt_customers_export_cancel" className="btn btn-light me-3">Discard</button>
															<button type="submit" id="kt_customers_export_submit" className="btn btn-primary">
																<span className="indicator-label">Submit</span>
																<span className="indicator-progress">Please wait...
																<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
															</button>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div> */}
								</div>
							
						</div>
						{/* <div id="kt_app_footer" className="app-footer">
							<div className="app-container container-xxl d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
							
								<div className="text-dark order-2 order-md-1">
								<span className="text-muted fw-semibold me-1">© 2023 www.gowish.app | All rights reserved</span>
								</div>
								<ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                                 
									<li className="menu-item">
										<a href="" target="_blank" className="menu-link px-2">  Terms and conditions |</a>
                                        </li>
                                      
                                       <li className="menu-item">
										<a href="" target="_blank" className="menu-link px-2">www.gowish.studio </a>
									</li>
                                    </ul>
							</div>
						</div> */}
					</div>
				</div>
        </div>
    )
}