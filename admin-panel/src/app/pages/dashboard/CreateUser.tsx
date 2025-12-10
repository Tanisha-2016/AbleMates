/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useState} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'

const CreatePage: FC = () => {
  const [productName, setProductName] = useState('')
  const [sku, setSku] = useState('')
  const [barcode, setBarcode] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [brand, setBrand] = useState('')
  // const [tags, setTags] = useState<string[]>([]);
  const [retailPrice, setRetailPrice] = useState('')
  const [wholesalePrice, setWholesalePrice] = useState('')
  const [quantityInStock, setQuantityInStock] = useState('')
  const [reorderLevel, setReorderLevel] = useState('')
  const [unitOfMeasure, setUnitOfMeasure] = useState('')
  const [discount, setDiscount] = useState('')
  const [taxRate, setTaxRate] = useState('')
  const [supplierName, setSupplierName] = useState('')
  const [supplierCode, setSupplierCode] = useState('')
  const [status, setStatus] = useState(true)
  const [visibility, setVisibility] = useState({website: false, mobile: false, pos: false})
  const [featuredProduct, setFeaturedProduct] = useState(false)
  const [images, setImages] = useState<File[]>([])
  const [warranty, setWarranty] = useState('')
  const [returnable, setReturnable] = useState(false)
  const [expiryDate, setExpiryDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic
  }

  return (
    <form className='product-form' onSubmit={handleSubmit}>
      <h2>User Information</h2>
      <input
        type='text'
        placeholder='Enter product name'
        required
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input type='text' placeholder='SKU' value={sku} onChange={(e) => setSku(e.target.value)} />
      <input
        type='text'
        placeholder='Barcode'
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
      />
      <textarea
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <h2>Categorization</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value=''>Select Category</option>
        <option value='Electronics'>Electronics</option>
        <option value='Apparel'>Apparel</option>
        {/* Add more categories as needed */}
      </select>
      <select value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
        {/* Populate based on selected category */}
      </select>
      <select value={brand} onChange={(e) => setBrand(e.target.value)} required>
        {/* Populate with brands */}
      </select>
      {/* Tags input component here */}

      <h2>Pricing & Stock</h2>
      <input
        type='number'
        placeholder='Enter retail price'
        required
        value={retailPrice}
        onChange={(e) => setRetailPrice(e.target.value)}
      />
      <input
        type='number'
        placeholder='Wholesale Price'
        value={wholesalePrice}
        onChange={(e) => setWholesalePrice(e.target.value)}
      />
      <input
        type='number'
        placeholder='Quantity in Stock'
        required
        value={quantityInStock}
        onChange={(e) => setQuantityInStock(e.target.value)}
      />
      <input
        type='number'
        placeholder='Reorder Level'
        value={reorderLevel}
        onChange={(e) => setReorderLevel(e.target.value)}
      />
      <select value={unitOfMeasure} onChange={(e) => setUnitOfMeasure(e.target.value)} required>
        <option value='pcs'>pcs</option>
        <option value='kg'>kg</option>
        <option value='liter'>liter</option>
      </select>

      <h2>Discounts & Taxes</h2>
      <input
        type='number'
        placeholder='Discount'
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
      />
      <select value={taxRate} onChange={(e) => setTaxRate(e.target.value)}>
        <option value='0'>0%</option>
        <option value='5'>5%</option>
        <option value='10'>10%</option>
      </select>

      <h2>Supplier Details</h2>
      <select value={supplierName} onChange={(e) => setSupplierName(e.target.value)} required>
        {/* Populate with suppliers */}
      </select>
      <input type='text' value={supplierCode} readOnly />

      <h2>Product Status & Visibility</h2>
      <label>
        <input type='checkbox' checked={status} onChange={() => setStatus(!status)} /> Active
      </label>
      <label>
        <input
          type='checkbox'
          checked={visibility.website}
          onChange={() => setVisibility({...visibility, website: !visibility.website})}
        />{' '}
        Website
      </label>
      <label>
        <input
          type='checkbox'
          checked={visibility.mobile}
          onChange={() => setVisibility({...visibility, mobile: !visibility.mobile})}
        />{' '}
        Mobile App
      </label>
      <label>
        <input
          type='checkbox'
          checked={featuredProduct}
          onChange={() => setFeaturedProduct(!featuredProduct)}
        />{' '}
        Featured Product
      </label>

      <h2>Product Images</h2>
      <input type='file' multiple onChange={(e) => setImages(Array.from(e.target.files || []))} />

      <h2>Additional Settings</h2>
      <input
        type='number'
        placeholder='Warranty (Months)'
        value={warranty}
        onChange={(e) => setWarranty(e.target.value)}
      />
      <label>
        <input type='checkbox' checked={returnable} onChange={() => setReturnable(!returnable)} />{' '}
        Returnable
      </label>
      <input type='date' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />

      <div className='form-buttons'>
        <button type='submit' className='btn-save'>
          Save
        </button>
        <button
          type='button'
          className='btn-cancel'
          onClick={() => {
            /* Handle cancel */
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

const CreateUser: FC = () => {
  return (
    <>
     <PageTitle breadcrumbs={[]}>Create User</PageTitle>
      <CreatePage />
    </>
  )
}

export {CreateUser}
