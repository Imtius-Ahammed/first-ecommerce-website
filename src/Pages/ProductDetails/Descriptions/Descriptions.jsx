import React from 'react';

const Descriptions = ({ productDetails }) => {

    const { description } = productDetails;

    return (
        <div className='container mx-auto'>
            {description}
            {/* <p className='my-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor.Ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.
            </p>
            <h1 className='text-xl font-medium mb-4'>Description Heading 01</h1>
            <p className='mb-4'>
                Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus, ultricies posuere erat. Duis convallis, arcu nec aliquam consequat, purus felis vehicula felis, a dapibus enim lorem nec augue. Nunc facilisis sagittis ullamcorper.
            </p>
            <ul className='list-disc pl-4 mb-4'>
                <li>Attribute Sets for quick product creation of different item types</li>
                <li>Approve, Edit and Delete Product Reviews and Tags</li>
                <li>Media Manager with automatic image resizing and watermarking</li>
                <li>Search Results rewrites and redirects</li>
                <li>Batch Import and Export of catalog</li>
                <li>Batch Updates to products in admin panel</li>
            </ul>
            <p className='mb-4'>
                Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus, ultricies posuere erat. Duis convallis, arcu nec aliquam consequat, purus felis vehicula felis, a dapibus enim lorem nec augue. Nunc facilisis sagittis ullamcorper.
            </p> */}
        </div>
    );
};

export default Descriptions;