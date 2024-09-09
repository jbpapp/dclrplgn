(function (blocks, element, blockEditor, components) {
    const { registerBlockType } = blocks;
    const { createElement } = element;
    const { RichText, InspectorControls, MediaUpload } = blockEditor;
    const { PanelBody, TextControl, Button } = components;

    registerBlockType('custom/hero-section', {
        title: 'Hero Section',
        icon: 'format-image',
        category: 'layout',
        attributes: {
            title: { type: 'string', default: 'Lorem ipsum dolor sit' },
            paragraph: { type: 'string', default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            buttonUrl: { type: 'string', default: '#apply' },
            buttonLabel: { type: 'string', default: 'Apply Now!' },
            backgroundImage: { type: 'string', default: '/wp-content/themes/dclr/images/Header_image.jpg' }
        },
        edit({ attributes, setAttributes }) {
            const { title, paragraph, buttonUrl, buttonLabel, backgroundImage } = attributes;

            return createElement(
                'section',
                { className: 'h-screen bg-black' },
                createElement(
                    InspectorControls,
                    null,
                    createElement(
                        PanelBody,
                        { title: 'Block Settings' },                    
                        createElement(
                            TextControl,
                            {
                                label: 'Button URL',
                                value: buttonUrl,
                                onChange: (newUrl) => setAttributes({ buttonUrl: newUrl })
                            }
                        ),
                        createElement(
                            TextControl,
                            {
                                label: 'Button Label',
                                value: buttonLabel,
                                onChange: (newLabel) => setAttributes({ buttonLabel: newLabel })
                            }
                        ),
                        createElement(
                            MediaUpload,
                            {
                                onSelect: (media) => setAttributes({ backgroundImage: media.url }),
                                type: 'image',
                                value: backgroundImage,
                                render: ({ open }) =>
                                    createElement(
                                        Button,
                                        { className: 'button button-large', onClick: open },
                                        'Select Background Image'
                                    )
                            }
                        )
                    )
                ),
                createElement(
                    'div',
                    { className: 'flex h-full items-center relative' },
                    createElement(
                        'div',
                        { className: 'container mx-auto flex lg:block content-center h-full' },
                        createElement(
                            'div',
                            { className: 'bg-[#090A0B] bg-opacity-75 lg:bg-opacity-0 p-6 flex flex-1 flex-col justify-center lg:block w-full lg:ml-28 2xl:ml-0 lg:w-[30%] relative z-10' },
                            createElement(
                                'div',
                                null,
                                createElement(
                                    RichText,
                                    {
                                        tagName: 'h1',
                                        className: 'text-[#FF2525] text-[32px] mb-4',
                                        value: title,
                                        onChange: (newTitle) => setAttributes({ title: newTitle }),
                                        placeholder: 'Enter title...'
                                    }
                                ),
                                createElement(
                                    RichText,
                                    {
                                        tagName: 'p',
                                        className: 'text-white text-[22px] leading-[32px] mb-8',
                                        value: paragraph,
                                        onChange: (newContent) => setAttributes({ paragraph: newContent }),
                                        placeholder: 'Enter paragraph...'
                                    }
                                ),
                                createElement(
                                    'a',
                                    {
                                        href: buttonUrl,
                                        className: 'py-2 px-8 rounded bg-gradient-360 from-[#950000] to-[#FF2626] hover:from-[#FF2626] hover:to-[#950000] text-white'
                                    },
                                    buttonLabel
                                )
                            )
                        )
                    ),
                    createElement(
                        'div',
                        {
                            className: 'w-full h-full absolute bg-cover bg-bottom bg-center bg-no-repeat',
                            style: { backgroundImage: `url(${backgroundImage})` }
                        }
                    )
                )
            );
        },
        save({ attributes }) {
            const { title, paragraph, buttonUrl, buttonLabel, backgroundImage } = attributes;

            return createElement(
                'section',
                { className: 'h-screen bg-black' },
                createElement(
                    'div',
                    { className: 'flex h-full items-center relative' },
                    createElement(
                        'div',
                        { className: 'container mx-auto flex lg:block content-center h-full' },
                        createElement(
                            'div',
                            { className: 'bg-[#090A0B] bg-opacity-75 lg:bg-opacity-0 p-6 flex flex-1 flex-col justify-center lg:block w-full lg:ml-28 2xl:ml-0 lg:w-[30%] relative z-10' },
                            createElement(
                                'div',
                                null,
                                createElement(
                                    RichText.Content,
                                    { tagName: 'h1', className: 'text-[#FF2525] text-[32px] mb-4', value: title }
                                ),
                                createElement(
                                    RichText.Content,
                                    { tagName: 'p', className: 'text-white text-[22px] leading-[32px] mb-8', value: paragraph }
                                ),
                                createElement(
                                    'a',
                                    {
                                        href: buttonUrl,
                                        className: 'py-2 px-8 rounded bg-gradient-360 from-[#950000] to-[#FF2626] hover:from-[#FF2626] hover:to-[#950000] text-white'
                                    },
                                    buttonLabel
                                )
                            )
                        )
                    ),
                    createElement(
                        'div',
                        {
                            className: 'w-full h-full absolute bg-cover bg-bottom bg-center bg-no-repeat',
                            style: { backgroundImage: `url(${backgroundImage})` }
                        }
                    )
                )
            );
        }
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
