def validate_xml():
    from lxml import etree

    xsd_f_name = "employee_schema.xsd"
    xml_f_name = "employees.xml"

    xsd_doc = etree.parse(xsd_f_name)
    xml_schema = etree.XMLSchema(xsd_doc)
    xml_doc = etree.parse(xml_f_name)

    try:
        xml_schema.assertValid(xml_doc)
    except etree.DocumentInvalid as e:
        print("XML document is invalid.")
        print(e)
    else:
        print("XML document is valid.")


if __name__ == "__main__":
    validate_xml()
