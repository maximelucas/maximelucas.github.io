 module Jekyll
  module HideCustomBibtex
    def hideCustomBibtex(input)
	  keywords = @context.registers[:site].config['filtered_bibtex_keywords']

	  keywords.each do |keyword|
		input = input.gsub(/^.*#{keyword}.*$\n/, '')
	  end

      return input
    end
  end
end

<<<<<<< HEAD
Liquid::Template.register_filter(Jekyll::HideCustomBibtex)
=======
Liquid::Template.register_filter(Jekyll::HideCustomBibtex)
>>>>>>> 9e44bfe (added filter to hide bibtex entries)
